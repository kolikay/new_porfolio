from rest_framework import serializers
from portfolio.models import UsersProfile
from django.contrib.auth import get_user_model, login, authenticate


      

class EditProfileSerializer( serializers.ModelSerializer):
    # token = serializers.SerializerMethodField()
    password = serializers.CharField(
        max_length=8,
        min_length=6,
        write_only=True
    )

    class Meta:
        model = UsersProfile
        fields = ('password', 'email','name', 'age', 'phone', 'address', 'about', 'stack', 'image', 'resume')
        read_only_fields = ('date_added', 'username', 'email')

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for (key, value) in validated_data.items():
            setattr(instance, key, value)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance




#User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersProfile
        fields = ('username', 'id', 'email', 'name')
    
#Registration

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input':'password'}, write_only=True)
    confirm_password = serializers.CharField(style={'input':'password'}, write_only=True)

    class Meta:
        model = UsersProfile
        fields = ('username', 'id', 'email', 'password', 'confirm_password')
        extra_kwargs = {'password':{'write_only':True,'style':{'input_type':'password'}}}


    def validate(self, data):
        pw = data.get('password')
        pw2 = data.get('confirm_password')
        if pw != pw2:
            raise serializers.ValidationError('passwords must match')
        return data

    def create(self, validated_data):
        user = UsersProfile.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
            )
        return user

#LOGIN SERIALIZER

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid Login Details")





