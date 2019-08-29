from collections import defaultdict

from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User


class RegisterView(APIView):
    # Only allow unauthenticated users
    permission_classes = [ ~IsAuthenticated ]

    # Create a user
    def post(self, req):
        username = req.data.get('username', '')
        password = req.data.get('password', '')

        errors = defaultdict(list)

        # Check if username and password were provided
        if not username:
            errors['username'].append('This field is required.')
        if not password:
            errors['password'].append('This field is required.')

        # Check if username is taken
        try:
            User.objects.get(username=username)
        except User.DoesNotExist:
            # User doesn't exist - no error
            pass
        else:
            errors['username'].append('Username already taken.')

        if errors:
            return Response(errors, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username, None, password)
        user.save()
        return Response(None, status=status.HTTP_201_CREATED)
