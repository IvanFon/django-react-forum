from django.urls import path

from .views import BoardView, BoardListView, CommentListView, PostView


urlpatterns = [
    path('boards/', BoardListView.as_view(), name='get_boards_list'),
    path('boards/<int:id>', BoardView.as_view(), name='get_board'),
    path('post/', PostView.as_view(), name='create_post'),
    path('post/<int:id>', PostView.as_view(), name='get_post'),
    path('post/<int:id>/comments/', CommentListView.as_view(),
         name='get_create_comments'),
]
