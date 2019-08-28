from rest_framework import generics

from .models import Board, Post
from .serializers import BoardSerializer, PostListSerializer


class BoardListView(generics.ListAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer


class BoardView(generics.ListAPIView):
    serializer_class = PostListSerializer

    def get_queryset(self):
        board_id = self.kwargs['board_id']
        return Post.objects.filter(board__id=board_id)