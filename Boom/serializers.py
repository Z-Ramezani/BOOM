from venv import create
from webbrowser import get
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from django.contrib.auth.models import User as users
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import Artist , Expert , Artwork_advertisement , Customer , User
# from django.contrib.auth import authenticate
# from rest_framework_simplejwt.settings import api_settings
# from django.contrib.auth.models import update_last_login
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.hashers import make_password





JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER


class UserSerializer(serializers.ModelSerializer):

    class Meta:

        model = users
        fields = ['username' , 'password'  ]

class ArtistSerializer(serializers.ModelSerializer):

    class Meta:

        model = Artist
        fields = ['name' , 'lastname' , 'birth_date' , 'phone' ,'national_id_number', 'free_post_artwork' , 'created_at' , 'password'  ]


class ExpertSerializer(serializers.ModelSerializer):
    

    class Meta:

        model = Expert
        fields = ['name' , 'lastname' , 'birth_date' , 'phone' ,'national_id_number' ]



class CustomerSerializer(serializers.ModelSerializer):
    

    class Meta:

        model = Customer
        fields = ['name' , 'lastname' , 'phone' ]






class RegisterArtistSerializer(ArtistSerializer):
    
    class Meta:
        model = Artist
        fields = ['name' , 'lastname' , 'birth_date' , 'phone' ,'national_id_number' , 'password' ,  ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        
        User.objects.create_artist(
            username=validated_data['national_id_number'],
            password=validated_data['password'])

        artist = users.objects.create(
            username=validated_data['national_id_number'])
        artist.set_password(validated_data['password'])
        artist.save()
            
        
        
        
        user1 = Artist.objects.create(
            name=validated_data['name'],
            lastname=validated_data['lastname'],
            national_id_number=validated_data['national_id_number'],
            birth_date=validated_data['birth_date'],
            phone=validated_data['phone'],
            password=validated_data['password'],
            free_post_artwork=2,
            user=users.objects.get(username=validated_data['national_id_number'])
             )
        
        return  user1

class RegisterExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = ['name' , 'lastname' , 'birth_date' , 'phone' ,'national_id_number' , 'password' ,  ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        
        User.objects.create_expert(
            username=validated_data['national_id_number'],
            password=validated_data['password'])

        expert = users.objects.create(
            username=validated_data['national_id_number'])
        expert.set_password(validated_data['password'])
        expert.save()
        
        user1 = Expert.objects.create(
            name=validated_data['name'],
            lastname=validated_data['lastname'],
            national_id_number=validated_data['national_id_number'],
            birth_date=validated_data['birth_date'],
            phone=validated_data['phone'],
            password=validated_data['password'],
            
            
             )
        
        return  user1

class RegisterCustomerSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = Customer
        fields = ['name' , 'lastname' , 'phone' , 'password'  ]
        extra_kwargs = {'password': {'write_only': True}}


    def create(self, validated_data):
        
        User.objects.create_customer(
            username=validated_data['phone'],
            password=validated_data['password'])

        customer = users.objects.create(
            username=validated_data['phone'])
        customer.set_password(validated_data['password'])
        customer.save()


        user1 = Customer.objects.create(
            name=validated_data['name'],
            lastname=validated_data['lastname'],
            phone=validated_data['phone'],
            password=validated_data['password'],
        )
        return user1




class LoginSerializers(serializers.Serializer):

    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('Incorrect Credentials Passed.')
        



# class LoginCustomerSerializers(serializers.Serializer):

#     # phone = serializers.DecimalField(max_digits=11 , decimal_places=0)
#     # password = serializers.CharField()

#     def validate(self, data):
#         user = authenticate(**data)
#         if user and user.is_active:
#             return user
#         raise serializers.ValidationError('Incorrect Credentials Passed.')





