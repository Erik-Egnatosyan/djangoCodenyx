from django.conf import settings
from django.conf.urls.static import static
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
    path('htmltags/', HTMLTagsPage.as_view(), name='HTMLTags'),
    path('htmltags/<tag_id>/', showHtmlTag, name='HTMLTag'),
    # path('csstags/', CSSTagsPage.as_view(), name='CSSTags'),
    # search AJAX
    path('search/', search, name='Search'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)