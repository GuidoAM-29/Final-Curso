from rest_framework.serializers import ModelSerializer
from .models import Usuario

class UsuarioSerializer(ModelSerializer):
    class Meta:
        model = Usuario
        fields = ["id","password","username", "email", "num_cedula" , "edad" , "genero" , "rol"]

    def create(self,validated_data):
        clave = validated_data.pop("password")
        usuario = Usuario(**validated_data)
        usuario.set_password(clave)
        usuario.save()
        return usuario

    def update(self, instance, validated_data):
        clave = validated_data.pop("password", None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if clave:
            instance.set_password(clave)
        instance.save()
        return instance
