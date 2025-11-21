from rest_framework.serializers import ModelSerializer
from .models import Cita


class CitaSerializer(ModelSerializer):
    class Meta:
        model = Cita
        fields = "__all__"