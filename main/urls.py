from django.urls import path
from .views import *

app_name = 'main'
urlpatterns = [
    path('', home, name='Home'),
    path('practice/', Practice.as_view(), name='Practice'),
    path('login/', LoginUser.as_view(redirect_authenticated_user=True), name='Login'),
    path('register/', RegisterUser.as_view(), name='Register'),
    path('logout/', logout_account, name='Logout'),
    path('account/', account, name='Account'),
    path('htmltags/<tag_id>/', showHtmlTag, name='HTMLTag'),
]