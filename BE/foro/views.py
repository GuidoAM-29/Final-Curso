from django.shortcuts import render
from .models import Publicacion
from .serializers import PublicacionSerializer
from rest_framework.generics import ListCreateAPIView


class PublicacionCreateView(ListCreateAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer
