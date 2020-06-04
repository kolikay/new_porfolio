from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import UserProfile
from .serializer import UserRegistrationSerializer, UserProfileSerializer
from rest_framework import viewsets, generics, permissions
from portfolio.forms import LoginForm, SignUpForm
from django.contrib.auth import authenticate,  get_user_model, logout
from .models import UserProfile
from django import forms
from rest_framework.response import Response
from django.views.generic import View
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView





def index(request):
    return HttpResponse('Hello World')


#Displayes all users in the database
class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()
    permission_classes  = [permissions.AllowAny]



#Handles signing up of users
class RegisterApiView(generics.CreateAPIView):
    queryset            = UserProfile.objects.all()
    serializer_class    = UserRegistrationSerializer
    permission_classes  = [permissions.AllowAny]



# class ProfileAPI(viewsets.ModelViewSet):
#     serializer_class = ProfileSerializer

#     def get_queryset(self):
#         return UserProfile.objects.filter(pk=self.kwargs['user_id'])


class ProfileAPI(APIView):
    def get(self, request, *args, **kwargs):
        user = get_object_or_404(UserProfile, username=kwargs['username'])
        profile_serializer = UserProfileSerializer(user)
        return Response(profile_serializer.data)












# def Profile(request):
#     users = UserProfile.objects.all()
#     for user in users:
#         print(request.user)
#         if user == request.user:
#             return user
#             print('correct')
#         else:
#             return HttpResponse("w")

#     return HttpResponse("working")



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




