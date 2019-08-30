from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from users.models import User
from .models import Board, Comment, Post
from .serializers import (
    BoardSerializer,
    CommentSerializer,
    PostListSerializer,
    PostSerializer,
)


client = APIClient()


class GetBoardsListTest(TestCase):
    """Test GET all boards."""

    def setUp(self):
        Board.objects.create(name='Foo', description='Foo board description.')
        Board.objects.create(name='Bar', description='Bar board description.')

    def test_get_all_boards(self):
        # Get API data
        res = client.get(reverse('get_boards_list'))
        # Get DB data
        boards = Board.objects.all()
        serializer = BoardSerializer(boards, many=True)
        # Verify response
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)


class GetBoardTest(TestCase):
    """Test GET board."""

    def setUp(self):
        u = User.objects.create_user('test', None, 'test')
        b1 = Board.objects.create(name='Foo')
        b2 = Board.objects.create(name='Bar')
        Post.objects.bulk_create([
            Post(author=u, board=b1, title='A', text='A'),
            Post(author=u, board=b1, title='B', text='B'),
            Post(author=u, board=b2, title='C', text='C'),
        ])

        self.b1 = b1

    def test_get_board(self):
        # Get API data
        res = client.get(reverse('get_board', args=[self.b1.id]))
        # Get DB data
        posts = Post.objects.filter(board=self.b1)
        serializer = PostListSerializer(posts, many=True)
        # Verify response
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)


class GetPostTest(TestCase):
    """Test GET post."""

    def setUp(self):
        u = User.objects.create_user('test', None, 'test')
        b = Board.objects.create(name='Foo')
        self.p = Post.objects.create(author=u, board=b, title='Foo',
                                     text='Bar')

    def test_get_post(self):
        # Get API data
        res = client.get(reverse('get_post', args=[self.p.id]))
        # Get DB data
        serializer = PostSerializer(self.p)
        # Verify response
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)


class CreatePostTest(TestCase):
    """Test POST create post."""

    def setUp(self):
        self.u = User.objects.create_user('test', None, 'test')
        self.b = Board.objects.create(name='Foo')

    def test_create_post(self):
        # Authenticate
        client.force_authenticate(user=self.u)
        # Create new post
        res = client.post(reverse('create_post'),
                          {
                              'board': self.b.id,
                              'title': 'Test',
                              'text': 'Test',
                          },
                          format='json')
        # Verify response
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)


class GetCommentsTest(TestCase):
    """Test GET post comments."""

    def setUp(self):
        u = User.objects.create_user('test', None, 'test')
        b = Board.objects.create(name='Foo')
        self.p = Post.objects.create(author=u, board=b, title='Test',
                                     text='Test')
        Comment.objects.bulk_create([
            Comment(author=u, post=self.p, text='A'),
            Comment(author=u, post=self.p, text='B'),
            Comment(author=u, post=self.p, text='C'),
        ])

    def test_get_post_comments(self):
        # Get API data
        res = client.get(reverse('get_create_comments', args=[self.p.id]))
        # Get DB data
        comments = Comment.objects.filter(post__id=self.p.id)
        serializer = CommentSerializer(comments, many=True)
        # Verify response
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)


class CreateCommentTest(TestCase):
    """Test POST create comment."""

    def setUp(self):
        self.u = User.objects.create_user('test', None, 'test')
        b = Board.objects.create(name='Foo')
        self.p = Post.objects.create(author=self.u, board=b, title='Test',
                                     text='Test')

    def test_create_comment(self):
        # Authenticate
        client.force_authenticate(user=self.u)
        # Create new comment
        res = client.post(reverse('get_create_comments', args=[self.p.id]),
                          {
                              'text': 'Test',
                          },
                          format='json')
        # Verify response
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
