from django.db import models


class Lessons(models.Model):
    titleArm = models.CharField(max_length=255, unique=True, default='', blank=True)
    titleRus = models.CharField(max_length=255, unique=True, default='', blank=True)
    titleEng = models.CharField(max_length=255, unique=True, default='', blank=True)
    descriptionArm = models.TextField(blank=True)
    descriptionRus = models.TextField(blank=True)
    descriptionEng = models.TextField(blank=True)
    image = models.ImageField(upload_to='lessonsImages', blank=True)

    def __str__(self):
        return self.titleArm


class HTMLTags(models.Model):
    tagname = models.CharField(max_length=50, default='', blank=False)
    descriptionArm = models.TextField(blank=True)
    descriptionRus = models.TextField(blank=True)
    descriptionEng = models.TextField(blank=True)
    syntax = models.TextField(default='', blank=True)
    example = models.TextField(default='', blank=True)
    typeArm = models.CharField(max_length=70, blank=True, default='')
    typeRus = models.CharField(max_length=70, blank=False, default='')

    def __str__(self):
        return self.tagname


class HTMLTagsAttrs(models.Model):
    attrname = models.CharField(max_length=50, default='', blank=False)


class CSSTags(models.Model):
    tagname = models.CharField(max_length=50, default='', blank=False)
    descriptionArm = models.TextField(blank=True)
    descriptionRus = models.TextField(blank=True)
    descriptionEng = models.TextField(blank=True)
    syntax = models.TextField(default='', blank=True)
    example = models.TextField(default='', blank=True)
    typeArm = models.CharField(max_length=70, blank=True, default='')
    typeRus = models.CharField(max_length=70, blank=False, default='')

    def __str__(self):
        return self.tagname

class CSSTagsAttrs(models.Model):
    attrname = models.CharField(max_length=50, default='', blank=False)
    CSSTag = models.ForeignKey(CSSTags, on_delete=models.CASCADE)
    descriptionArm = models.TextField(blank=True)
    descriptionRus = models.TextField(blank=True)
    descriptionEng = models.TextField(blank=True)
