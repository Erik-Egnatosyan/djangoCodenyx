from django.contrib import admin
from django.template.defaultfilters import truncatechars

from .models import *

class CSStagsAttrs(admin.StackedInline):
    model = CSSTagsAttrs
    extra = 3

class HTMLtags(admin.ModelAdmin):
    list_display = ('tagname', 'descriptionArm', 'descriptionRus', 'syntax', 'example')
    fieldsets = [('Tag', {'fields': ['tagname']}), ('Description',{'fields': ['descriptionArm', 'descriptionRus']}), ('Syntax', {'fields': ['syntax']}), ('Example', {'fields': ['example']}), ('Type', {'fields': ['typeArm', 'typeRus']})]

class CSStags(admin.ModelAdmin):
    list_display = ('tagname', 'descriptionArm', 'descriptionRus', 'syntax', 'example')
    fieldsets = [('Tag', {'fields': ['tagname']}), ('Description',{'fields': ['descriptionArm', 'descriptionRus']}), ('Example', {'fields': ['example']}), ('Type', {'fields': ['typeArm', 'typeRus']})]
    inlines = [CSStagsAttrs]

admin.site.register(Lessons)
admin.site.register(HTMLTags, HTMLtags)
admin.site.register(CSSTags, CSStags)
admin.site.register(CSSTagsAttrs)
