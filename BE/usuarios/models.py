from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Usuario(AbstractUser):
    GENERO_OPCIONES = (
        ("Masculino","MASCULINO"),
        ("Femenino","FEMENINO"),
        ("Otro","OTRO")
    )
    ROL_USUARIO = (
        ("Psicologo","PSICOLOGO"),
        ("Usuario","USUARIO"),
        ("Admin","ADMIN")
        )
    num_cedula = models.CharField(max_length=15,null=False)
    edad = models.IntegerField()
    genero = models.CharField(choices=GENERO_OPCIONES,max_length=20)
    rol = models.CharField(choices=ROL_USUARIO,max_length=30)
