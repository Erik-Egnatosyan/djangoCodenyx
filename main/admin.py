from django.contrib import admin
from django.template.defaultfilters import truncatechars

from .models import *

class HTMLtags(admin.ModelAdmin):
    list_display = ('tagname', 'descriptionArm', 'descriptionRus', 'syntax', 'example')
    fieldsets = [('Tag', {'fields': ['tagname']}), ('Description',{'fields': ['descriptionArm', 'descriptionRus']}), ('Syntax', {'fields': ['syntax']}), ('Example', {'fields': ['example']})]

    def descriptionRus(self, obj):
        return obj.descriptionRus[:100]

admin.site.register(Lessons)
admin.site.register(HTMLTags, HTMLtags)
