from django.contrib import admin
from django.urls import path
from .views import UsuarioCreateView,UsuarioLoginView,UsuarioPorIdView,EditarUsuarioView

urlpatterns = [
    path("crear-usuario/",UsuarioCreateView.as_view()),
    path("login-usuario/",UsuarioLoginView.as_view()),
    path("usuario-por-id/<int:id_usuario>/",UsuarioPorIdView.as_view()),
    path("actualizar-usuario/",EditarUsuarioView.as_view()),
]