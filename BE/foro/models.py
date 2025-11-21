from django.db import models

class Publicacion(models.Model):
    usuario = models.ForeignKey("usuarios.Usuario",on_delete=models.CASCADE)
    fecha_publicacion = models.DateTimeField(auto_now_add=True)
    contenido_digamos = models.CharField(max_length=250)
