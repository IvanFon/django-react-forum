from rest_framework import serializers

from .models import Board, Comment, Post


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ('id', 'name', 'description', )


class PostSerializer(serializers.ModelSerializer):
    # Get author username
    author = serializers.CharField(source='author.username')

    class Meta:
        model = Post
        fields = ('id', 'author', 'board', 'title', 'text', 'date_added', )


class PostListSerializer(serializers.ModelSerializer):
    # Get author username
    author = serializers.CharField(source='author.username')

    class Meta:
        model = Post
        fields = ('id', 'author', 'title', 'date_added', )


class CommentSerializer(serializers.ModelSerializer):
    # Get author username
    author = serializers.CharField(source='author.username')

    class Meta:
        model = Comment
        fields = ('id', 'author', 'post', 'text', 'date_added', )
