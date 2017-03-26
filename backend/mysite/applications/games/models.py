from __future__ import unicode_literals

from django.db import models


# Create your models here.
class Game(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=750)
    link = models.URLField(default='')
    logo = models.FileField(upload_to='files/games/', blank=True)
    image = models.ImageField(upload_to='games/', blank=True)
