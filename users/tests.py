from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from .models import User


client = APIClient()


class RegisterUserTest(TestCase):
    """Test POST register user."""

    def test_register_user(self):
        # Register
        res = client.post(reverse('register'),
                          {
                              'username': 'test',
                              'password': 'test',
                          },
                          format='json')
        # Verify response
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.get(username='test')
                                    .check_password('test'))


class ObtainRefreshTokenTest(TestCase):
    """Test POST obtain token."""

    def setUp(self):
        User.objects.create_user('test', None, 'test')

    def obtain_token(self):
        return client.post(reverse('token_obtain_pair'),
                           {
                               'username': 'test',
                               'password': 'test',
                           },
                           format='json')

    def test_obtain_token(self):
        # Obtain tokens
        res = self.obtain_token()
        # Verify response
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertTrue('access' in res.data)
        self.assertTrue('refresh' in res.data)

    def test_refresh_token(self):
        # Obtain tokens
        data = self.obtain_token()
        # Refresh tokens
        res = client.post(reverse('token_refresh'),
                          {
                              'refresh': data.data['refresh'],
                          },
                          format='json')
        # Verify response
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertTrue('access' in res.data)
        self.assertTrue('refresh' in res.data)
