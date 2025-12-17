from django.urls import path
from .views import CrearCitaView,CitaPorUsuario

urlpatterns = [
    path("crear-cita/",CrearCitaView.as_view()),
    path("cita-usuario/<int:id_usuario>/",CitaPorUsuario.as_view())
]
