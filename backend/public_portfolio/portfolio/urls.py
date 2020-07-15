
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from .views import  UserViewSet,  ProfileAPI, EditProfile, UserAPI, RegisterAPI, LoginAPI
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from knox import views as knox_views


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet , basename='user')




urlpatterns = [
  
    
    path('', include(router.urls) ),
    path('<username>/', ProfileAPI.as_view()),
    path('<username>/edit-profile/',EditProfile.as_view(), name='editpost'),
    #knoxs
    path('auth/', include('knox.urls')),
    path('api/auth/register/', RegisterAPI.as_view()),
    path('api/auth/login/', LoginAPI.as_view()),
    path('api/auth/user/', UserAPI.as_view(), name='getuser'),
    path('api/auth/logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
   
  
   
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)