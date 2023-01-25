from django.urls import path
from .views import *

app_name = 'main'
urlpatterns = [
    path('', home, name='Home'),
    path('practice/', Practice.as_view(), name='Practice')
]