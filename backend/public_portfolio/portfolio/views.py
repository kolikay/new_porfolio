from .models import UsersProfile
from .serializer import EditProfileSerializer, UserSerializer, RegistrationSerializer, LoginSerializer
from rest_framework import viewsets, generics, permissions, status
from .models import UsersProfile
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import UpdateAPIView, RetrieveUpdateAPIView
from django.shortcuts import get_object_or_404






from knox.models import AuthToken


#Displayes all users in the database
class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = UserSerializer
    queryset = UsersProfile.objects.all().order_by('-date_added')
    permission_classes  = [permissions.AllowAny]




class ProfileAPI(APIView):
    permission_classes  = [permissions.AllowAny]
    
    def get(self, request, *args, **kwargs):
        user = get_object_or_404(UsersProfile, username=kwargs['username'])
        profile_serializer = UserSerializer(user)
        return Response(profile_serializer.data)
     

      

class EditProfile(RetrieveUpdateAPIView):
    permission_classes  = [permissions.IsAuthenticated]
    serializer_class = EditProfileSerializer
   
   
    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)
        print(self.request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        print(self.request.user)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)
        


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "User": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "User": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        print(self.request.user)
        return self.request.user



 












