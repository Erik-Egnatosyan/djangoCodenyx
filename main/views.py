from django.shortcuts import render
from django.views.generic import ListView
from .models import *


def home(request):
    return render(request, 'main/index.html')


class Practice(ListView):
    model = Lessons
    template_name = 'main/practice.html'
    context_object_name = 'lessons'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

    def get_queryset(self):
        return Lessons.objects.all()