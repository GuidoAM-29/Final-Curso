from django.shortcuts import render
from .models import Cita
from .serializers import CitaSerializer
from rest_framework.generics import ListCreateAPIView


class CrearCitaView(ListCreateAPIView):
    queryset = Cita.objects.all()
    serializer_class = CitaSerializer


class CitaPorUsuario(ListCreateAPIView):
    serializer_class = CitaSerializer

    def get_queryset(self):
        id_usuario = self.kwargs["id_usuario"]
        return Cita.objects.filter(usuario_paciente=id_usuario)

