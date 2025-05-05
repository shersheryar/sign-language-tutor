from django.urls import path
from .views import GestureRecognitionView

urlpatterns = [
    path('recognize/', GestureRecognitionView.as_view(), name='gesture_recognition'),
]
