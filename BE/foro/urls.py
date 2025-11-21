from django.contrib import admin
from django.urls import path
from .views import PublicacionCreateView

urlpatterns = [
    path("crear-publicacion/",PublicacionCreateView.as_view())
]
