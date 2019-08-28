from django.urls import include, path
from rest_framework import routers

from .api import BoardViewSet


router = routers.DefaultRouter()
router.register('boards', BoardViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
