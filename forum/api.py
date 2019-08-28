from rest_framework import generics

from .models import Board, Post
from .serializers import BoardSerializer, PostSerializer, PostListSerializer


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
