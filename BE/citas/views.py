from django.shortcuts import render
from .models import Cita
from .serializers import CitaSerializer
from rest_framework.generics import ListCreateAPIView


class CrearCitaView(ListCreateAPIView):
    queryset = Cita.objects.all()
    serializer_class = CitaSerializer