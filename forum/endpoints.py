from django.urls import path

from .api import BoardView, BoardListView


urlpatterns = [
    path('boards/', BoardListView.as_view()),
    path('boards/<int:board_id>', BoardView.as_view()),
]
