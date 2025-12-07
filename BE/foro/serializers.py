from rest_framework.serializers import ModelSerializer
from .models import Publicacion,Tip,RespuestaTip
from .models import Recursos

class PublicacionSerializer(ModelSerializer):
    class Meta:
        model = Publicacion
        fields = "__all__"

class TipSerializer(ModelSerializer):
    class Meta:
        model = Tip
        fields = "__all__"

class RespuestaTipSerializer(ModelSerializer):
    class Meta:
        model = RespuestaTip
        fields = "__all__"

class RecursosSerializer(ModelSerializer):
    class Meta:
        model = Recursos
        fields = "__all__"

class RespuestaSerializer(ModelSerializer):
    class Meta:
        model = RespuestaTip
        fields = "__all__"
