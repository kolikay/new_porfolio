from rest_framework import serializers
from portfolio.models import UserProfile, Resume
from django.contrib.auth import get_user_model, login, authenticate



User = get_user_model()

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input':'password'}, write_only=True)
    password2 = serializers.CharField(style={'input':'password'}, write_only=True)

    class Meta:
        model = UserProfile
        fields = ('__all__')
        extra_kwargs = {
            'password':{
              'write_only': True,
              'style':{'input_type':'password'}
            }
        }

    def validate(self, data):
        pw = data.get('password')
        pw2 = data.get('password2')
        if pw != pw2:
            raise serializers.ValidationError('password must match')
        return data

    def create(self, validated_data):
        new_user = User(
        username=validated_data.get('username'),
        email=validated_data.get('email'),
        first_name = validated_data['name']
        )
        new_user.set_password(validated_data.get('password'))
        new_user.save()

        new_user = UserProfile(
        username=validated_data.get('username'),
        email=validated_data.get('email'),
        name = validated_data.get('name'),
        address = validated_data.get('address'),
        About_me = validated_data.get('About_me'),
        phone = validated_data.get('phone'),
        age = validated_data.get('age'))
        new_user.save()
        return new_user



class ResumeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resume
        fields = ('__all__')


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('__all__')




# class LoginSerializer(serializers.ModelSerializer):
#     username          = forms.CharField()
#     password          = forms.CharField(widget=forms.PasswordInput)


    


        






