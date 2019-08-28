from django.urls import path

from .api import BoardView, BoardListView, PostView


urlpatterns = [
    path('boards/', BoardListView.as_view()),
    path('boards/<int:id>', BoardView.as_view()),
    path('post/<int:id>', PostView.as_view()),
]
