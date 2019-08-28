from django.db import models


class Board(models.Model):
    """A board that users can post to."""

    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Post(models.Model):
    """A post made to a board."""

    title = models.CharField(max_length=50)
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    board = models.ForeignKey(Board, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Comment(models.Model):
    """A comment made on a post."""

    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        if len(self.text) > 50:
            return f"{self.text[:50]}..."
        else:
            return self.text
