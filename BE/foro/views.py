from django.shortcuts import render
from .models import Publicacion,Tip,RespuestaTip
from .serializers import PublicacionSerializer,TipSerializer,RespuestaTipSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Recursos
from .serializers import RecursosSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.generics import DestroyAPIView

class PublicacionCreateView(ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer

from .serializers import RespuestaPublicacionSerializer
from .models import RespuestaPublicacion

class RespuestaPublicacionCreateView(ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = RespuestaPublicacion.objects.all()
    serializer_class = RespuestaPublicacionSerializer

class PublicacionRetrieveView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer


# agrega y trae tips
class TipCreateView(ListCreateAPIView):
    queryset = Tip.objects.all()
    serializer_class = TipSerializer

class RespuestaTipCreateView(ListCreateAPIView):
    queryset = RespuestaTip.objects.all()
    serializer_class = RespuestaTipSerializer

class RespuestaTipRetrieveView(RetrieveUpdateDestroyAPIView):
    queryset = RespuestaTip.objects.all()
    serializer_class = RespuestaTipSerializer

class RecursosCreateView(ListCreateAPIView):
    queryset = Recursos.objects.all()
    serializer_class = RecursosSerializer

class EliminarRecurso(DestroyAPIView):
    queryset = Recursos.objects.all()
    serializer_class = RecursosSerializer
    lookup_field = 'id'

class EliminarPublicacion(RetrieveUpdateDestroyAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer
    lookup_field = 'id'