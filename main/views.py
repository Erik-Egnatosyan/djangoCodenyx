from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import ListView, CreateView

from .forms import LoginUserForm, RegisterUserForm
from .models import *


def home(request):
    a = Lessons.objects.get(pk=1)
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


class HTMLTagsPage(ListView):
    model = HTMLTags
    template_name = 'main/Html-Category.html'
    context_object_name = 'tags'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
    def get_queryset(self):
        return HTMLTags.objects.all()


def showHtmlTag(request, tag_id):
    tag = HTMLTags.objects.get(pk=tag_id)
    return render(request, 'main/HTMLTags.html', {'tag': tag})


# ALL RELATED TO LOGIN AND REGISTER
class RegisterUser(CreateView):
    form_class = RegisterUserForm
    template_name = 'main/register.html'
    success_url = reverse_lazy('login')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Register'
        return context

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('main:Home')


class LoginUser(LoginView):
    form_class = LoginUserForm
    template_name = 'main/login.html'
    redirect_authenticated_user = 'main/index.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "Login"
        return context

@login_required()
def account(request):
    return render(request, 'main/account.html')

def logout_account(request):
    logout(request)
    return redirect('main:Home')