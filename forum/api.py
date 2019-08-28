from rest_framework import generics

from .models import Board, Comment, Post
from .serializers import (BoardSerializer, CommentSerializer, PostSerializer,
                          PostListSerializer)


class BoardListView(generics.ListAPIView):
    serializer_class = BoardSerializer
    queryset = Board.objects.all()


class BoardView(generics.ListAPIView):
    serializer_class = PostListSerializer

    def get_queryset(self):
        board_id = self.kwargs['id']
        return Post.objects.filter(board__id=board_id)


class PostView(generics.RetrieveAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_field = 'id'


class CommentListView(generics.ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        post_id = self.kwargs['id']
        return Comment.objects.filter(post__id=post_id)
