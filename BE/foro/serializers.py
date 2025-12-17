from rest_framework.serializers import ModelSerializer
from .models import Publicacion,Tip,RespuestaTip
from .models import Recursos
from .models import RespuestaPublicacion
from rest_framework import serializers

class PublicacionSerializer(ModelSerializer):
    usuario_nombre = serializers.CharField(source='usuario.username', read_only=True)
    class Meta:
        model = Publicacion
        fields = ["usuario","usuario_nombre","fecha_publicacion","contenido_digamos","titulo","categoria","id"]

class TipSerializer(ModelSerializer):
    usuario_nombre = serializers.CharField(source='usuario.username', read_only=True)
    class Meta:
        model = Tip
        fields = "__all__"

class RespuestaTipSerializer(ModelSerializer):
    class Meta:
        model = RespuestaTip
        fields = "__all__"

class RespuestaPublicacionSerializer(ModelSerializer):
    usuario_nombre = serializers.CharField(source='usuario.username', read_only=True)
    class Meta:
        model = RespuestaPublicacion
        fields = "__all__"

class RecursosSerializer(ModelSerializer):
    class Meta:
        model = Recursos
        fields = "__all__"

class RespuestaSerializer(ModelSerializer):
    class Meta:
        model = RespuestaTip
        fields = "__all__"
