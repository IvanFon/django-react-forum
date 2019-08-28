from django.urls import path

from .api import BoardList, PostList


urlpatterns = [
    path('boards/', BoardList.as_view()),
    path('board/<int:board_id>', PostList.as_view()),
]
