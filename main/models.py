from django.contrib.auth.models import User
from django.db import models

import re


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

    def __str__(self):
        return self.tagname


class CSSTags(models.Model):
    tagname = models.CharField(max_length=50, default='', blank=False)
    descriptionArm = models.TextField(blank=True)
    descriptionRus = models.TextField(blank=True)
    descriptionEng = models.TextField(blank=True)
    syntax = models.TextField(default='', blank=True)
    example = models.TextField(default='', blank=True)
    letter = models.CharField(max_length=1, default='', blank=True)

    def save(self, *args, **kwargs):
        if not '!' in self.tagname:
            for i in self.tagname:
                if i.isalpha():
                    self.letter = i
                    break
        else:
            self.letter = '!'
        super().save(*args, *kwargs)
    def __str__(self):
        return self.tagname



class CSSTagsAttrs(models.Model):
    tag = models.ForeignKey(CSSTags, on_delete=models.CASCADE, default='')
    attrname = models.CharField(max_length=50, default='', blank=False)
    descriptionArm = models.TextField(blank=True)
    descriptionRus = models.TextField(blank=True)
    descriptionEng = models.TextField(blank=True)

    def __str__(self):
        return self.attrname

class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to='UserAccountPics', blank=True)
    @property
    def coins_count(self):
        return self.user.nyxcoins.value

    def __str__(self):
        return self.user.username


class Badge(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    earned_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class UserBadge(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    badge = models.ForeignKey(Badge, on_delete=models.CASCADE)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    earned_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user} earned {self.badge}'


class NYXCoins(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    value = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.user.username
