from django.db import models

class Publicacion(models.Model):
    usuario = models.ForeignKey("usuarios.Usuario",on_delete=models.CASCADE)
    fecha_publicacion = models.DateTimeField(auto_now_add=True)
    contenido_digamos = models.CharField(max_length=250)
    titulo = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100)

class Tip(models.Model):
    categoria = models.CharField(max_length=100)
    fecha_publicacion = models.DateTimeField(auto_now_add=True)
    contenido = models.TextField()
    usuario = models.ForeignKey("usuarios.Usuario",on_delete=models.CASCADE)

class RespuestaTip(models.Model):
    fecha_respuesta = models.DateTimeField(auto_now_add=True)
    contenido_respuesta = models.CharField(max_length=250)
    usuario = models.ForeignKey("usuarios.Usuario",on_delete=models.CASCADE)
    tip = models.ForeignKey(Tip,on_delete=models.CASCADE)


class Recursos(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    enlace = models.URLField()
    categoria = models.CharField(max_length=100)
    