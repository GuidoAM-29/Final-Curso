from django.shortcuts import render
from .models import Usuario
from .serializers import UsuarioSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate

class UsuarioCreateView(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


class UsuarioLoginView(APIView):
    def post(self,request):
        nombre_usuario = request.data.get("username")
        clave_usuario = request.data.get("password")

        usuario = authenticate(username=nombre_usuario,password=clave_usuario)

        if usuario is not None:
            return Response({"mensaje":"El usuario existe","id_usuario":usuario.id})
        else:
            return Response({"mensaje":"El usuario no existe"})

class UsuarioPorIdView(ListCreateAPIView):
    serializer_class = UsuarioSerializer

    def get_queryset(self):
        id_usuario = self.kwargs["id_usuario"] 
        return Usuario.objects.filter(id=id_usuario)
    
class EditarUsuarioView(APIView):
    def patch(self,request):
        id_usuario  =request.data.get("id_usuario")
        nombre_usuario = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("correo")
        num_cédula = request.data.get("cedula")
        edad = request.data.get("edad")
        genero = request.data.get("genero")
        rol = request.data.get("rol")

        usuario = Usuario.objects.get(id=id_usuario)

        if nombre_usuario:
            usuario.username = nombre_usuario
        if password:
            usuario.set_password(password)
        if email:
            usuario.correo = email
        if num_cédula:
            usuario.cedula = num_cédula
        if edad:
            usuario.edad = edad
        if genero:
            usuario.genero = genero
        if rol:
            usuario.rol = rol

        usuario.save()
        return Response({"mensaje":"Usuario actualizado correctamente"})


                               



