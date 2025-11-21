from rest_framework.serializers import ModelSerializer
from .models import Publicacion

class PublicacionSerializer(ModelSerializer):
    class Meta:
        model = Publicacion
        fields = "__all__"
