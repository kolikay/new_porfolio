from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import UserProfile, Resume
from .serializer import UserRegistrationSerializer, ResumeSerializer, UserProfileSerializer
from rest_framework import viewsets, generics, permissions
from portfolio.forms import LoginForm, SignUpForm
from django.contrib.auth import authenticate,  get_user_model, logout
from .models import UserProfile
from django import forms
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt




def index(request):
    return HttpResponse('Hello World')


#Displayes all users in the database
class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


#Handles signing up of users
class RegisterApiView(generics.CreateAPIView):
    queryset            = UserProfile.objects.all()
    serializer_class    = UserRegistrationSerializer
    permission_classes  = [permissions.AllowAny]


#Handles resumes inputs into the database
class ResumeViewSet(viewsets.ModelViewSet):
    serializer_class = ResumeSerializer
    queryset = Resume.objects.all()


#Api for logging users in

# def login_page(request):
#     login_form = LoginForm(request.POST or None)
#     context = {'login_form': login_form}
#     if login_form.is_valid():
#         username = login_form.cleaned_data.get('username')
#         password = login_form.cleaned_data.get('password')
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return redirect ('/')
#         else:
#             return HttpResponse("Invalid Login details provided")
#     return render(request, 'portfolio/login_form.html', context)




