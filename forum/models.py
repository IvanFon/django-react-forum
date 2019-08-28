from django.db import models


class Board(models.Model):
    """A board that users can post to."""

    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
