from django.contrib import admin

from .models import Board
from .models import Post


admin.site.register(Board)
admin.site.register(Post)