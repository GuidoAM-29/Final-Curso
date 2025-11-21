from django.urls import path
from .views import CrearCitaView

urlpatterns = [
    path("crear-cita/",CrearCitaView.as_view())
]