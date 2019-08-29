from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainSlidingView,
    TokenRefreshSlidingView,
)

from .views import RegisterView


urlpatterns = [
    path('token/', TokenObtainSlidingView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshSlidingView.as_view(),
         name='token_refresh'),
    path('register/', RegisterView.as_view()),
]
