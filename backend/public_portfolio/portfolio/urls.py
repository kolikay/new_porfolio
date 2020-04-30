
from django.urls import path, include
from .views import ResumeViewSet, RegisterApiView, UserViewSet, index, login_page


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet, basename='user')
router.register('resume', ResumeViewSet, basename='resume')


urlpatterns = [
    path('login/', login_page, name = "login"),
    path('signup/', RegisterApiView.as_view(), name = "signup"),  
    path('index/', index),
    path('', include(router.urls) )
   
]
