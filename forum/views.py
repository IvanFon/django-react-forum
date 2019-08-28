from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Board, Comment, Post
from .serializers import (
    BoardSerializer,
    CommentSerializer,
    PostSerializer,
    PostListSerializer
)


class BoardListView(generics.ListAPIView):
    serializer_class = BoardSerializer
    queryset = Board.objects.all()


class BoardView(generics.ListAPIView):
    serializer_class = PostListSerializer

    def get_queryset(self):
        board_id = self.kwargs['id']
        return Post.objects.filter(board__id=board_id)


class PostView(APIView):
    # Get a post
    def get(self, req, id):
        post = Post.objects.get(id=id)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    # Create a post
    def post(self, req):
        serializer = PostSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentListView(APIView):
    serializer_class = CommentSerializer

    # Get comment list
    def get(self, req, id):
        comments = Comment.objects.filter(post__id=id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    # Create a comment
    def post(self, req, id):
        data = req.data
        data['post'] = id
        serializer = CommentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
