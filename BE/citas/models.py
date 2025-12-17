from django.db import models

# Create your models here.
class Cita(models.Model):
    usuario_psicologo = models.ForeignKey("usuarios.Usuario",on_delete=models.CASCADE,related_name="psicologo")
    usuario_paciente = models.ForeignKey("usuarios.Usuario",on_delete=models.CASCADE,related_name="paciente")
    fecha_cita = models.DateTimeField()

