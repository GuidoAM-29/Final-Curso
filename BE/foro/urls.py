from django.contrib import admin
from django.urls import path
from .views import PublicacionCreateView, PublicacionRetrieveView
from .views import TipCreateView
from .views import RespuestaTipCreateView
from .views import RespuestaTipRetrieveView
from .views import RecursosCreateView
urlpatterns = [
    path("crear-publicacion/",PublicacionCreateView.as_view()),
    path("publicacion/<int:pk>/", PublicacionRetrieveView.as_view()),
    path("crear-tip/",TipCreateView.as_view()),
    path("crear-respuesta-tip/",RespuestaTipCreateView.as_view()),
    path("crear-respuesta-tip/",RespuestaTipCreateView.as_view()),
    path ("crear-recursos/", RecursosCreateView.as_view())
]
