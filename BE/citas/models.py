from django.db import models

# Create your models here.
class Cita(models.Model):
    paciente = models.ForeignKey("usuarios.Usuario",on_delete=models.CASCADE,related_name="paciente")
    especialista = models.ForeignKey("usuarios.Usuario",on_delete=models.CASCADE,related_name="especialista")
    fecha_cita = models.DateTimeField()
