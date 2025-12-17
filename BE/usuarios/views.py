from django.shortcuts import render
from .models import Usuario
from .serializers import UsuarioSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken  
from rest_framework.permissions import IsAuthenticated as isAuthenticated
from rest_framework.response import Response
from rest_framework import status, permissions

class UsuarioCreateView(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


class UsuarioLoginView(APIView):
    def post(self,request):
        nombre_usuario = request.data.get("username")
        clave_usuario = request.data.get("password")

        usuario = authenticate(username=nombre_usuario,password=clave_usuario)

        if usuario is not None:
            access_token = RefreshToken.for_user(usuario).access_token
            return Response({"mensaje":"El usuario existe","rol":usuario.rol,"id_usuario":usuario.id,"token":str(access_token)})
        else:
            return Response({"mensaje":"El usuario no existe"})

class UsuarioPorIdView(ListCreateAPIView):
    serializer_class = UsuarioSerializer
    permission_classes = [isAuthenticated]
    def get_queryset(self):
        id_usuario = self.kwargs["id_usuario"] 
        return Usuario.objects.filter(id=id_usuario)


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Usuario

class EditarUsuarioView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def patch(self, request):
        id_usuario = request.data.get("id_usuario")

        if not id_usuario:
            return Response({"error": "Debe enviar el id_usuario"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            usuario = Usuario.objects.get(id=id_usuario)
        except Usuario.DoesNotExist:
            return Response({"error": "El usuario no existe"}, status=status.HTTP_404_NOT_FOUND)

        nombre_usuario = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("correo")
        num_cedula = request.data.get("cedula")
        edad = request.data.get("edad")
        genero = request.data.get("genero")
        rol = request.data.get("rol")

        try:
            if nombre_usuario:
                usuario.username = nombre_usuario
            if password:
                usuario.set_password(password)
            if email:
                usuario.correo = email
            if num_cedula:
                usuario.cedula = num_cedula
            if edad:
                usuario.edad = edad
            if genero:
                usuario.genero = genero
            if rol:
                usuario.rol = rol

            usuario.save()

            return Response({"mensaje": "Usuario actualizado correctamente"}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

