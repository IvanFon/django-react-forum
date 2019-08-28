from django.contrib import admin

from .models import Board, Comment, Post


admin.site.register(Board)
admin.site.register(Comment)
admin.site.register(Post)
