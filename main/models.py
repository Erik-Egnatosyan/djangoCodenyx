from django.db import models


class Lessons(models.Model):
    titleArm = models.CharField(max_length=255, unique=True, default='', blank=True)
    titleRus = models.CharField(max_length=255, unique=True, default='', blank=True)
    titleEng = models.CharField(max_length=255, unique=True, default='', blank=True)
    descriptionArm = models.TextField(blank=True)
    descriptionRus = models.TextField(blank=True)
    descriptionEng = models.TextField(blank=True)

    def __str__(self):
        return self.titleArm