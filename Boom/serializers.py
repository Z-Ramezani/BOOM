from venv import create
from webbrowser import get
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from django.contrib.auth.models import User as users
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import Artist , Expert , Artwork_advertisement , Customer , User , Sample_artwork , Expert_comment
# from django.contrib.auth import authenticate
# from rest_framework_simplejwt.settings import api_settings
# from django.contrib.auth.models import update_last_login
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.hashers import make_password
from django import forms

# from .backends import ArtistBackend , ExpertBackend , CustomerBackend




JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER


# class UserSerializer(serializers.ModelSerializer):

#     class Meta:

#         model = users
#         fields = ['username' , 'password'  ]


class UserSerializer(serializers.ModelSerializer):

    class Meta:

        model = User
        fields = ['username' , 'password' , 'is_active' , 'is_artist' , 'is_expert' , 'is_customer'  ]

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
        


        artist = users.objects.create(
            username=validated_data['national_id_number'])
        artist.set_password(validated_data['password'])
        artist.save()


        User.objects.create_artist(
            username=validated_data['national_id_number'],
            password=validated_data['password'],
            is_active=True,
            is_artist=True,
            is_expert=False,
            is_customer=False)

        
        user1 = Artist.objects.create(
            name=validated_data['name'],
            lastname=validated_data['lastname'],
            national_id_number=validated_data['national_id_number'],
            birth_date=validated_data['birth_date'],
            phone=validated_data['phone'],
            password=validated_data['password'],
            free_post_artwork=2,
            user=User.objects.get(username=validated_data['national_id_number'])
             )
        
        return  user1

class RegisterExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = ['name' , 'lastname' , 'birth_date' , 'phone' ,'national_id_number' , 'password' ,  ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        


        expert = users.objects.create(
            username=validated_data['national_id_number'])
        expert.set_password(validated_data['password'])
        expert.save()

        User.objects.create_expert(
            username=validated_data['national_id_number'],
            password=validated_data['password'],
            is_active=True,
            is_artist=False,
            is_expert=True,
            is_customer=False)
        
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
        


        customer = users.objects.create(
            username=validated_data['phone'])
        customer.set_password(validated_data['password'])
        customer.save()


        User.objects.create_customer(
            username=validated_data['phone'],
            password=validated_data['password'],
            is_active=True,
            is_artist=False,
            is_expert=False,
            is_customer=True)


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
        






# class LoginArtistSerializers(serializers.Serializer):

#     username = serializers.CharField()
#     password = serializers.CharField()
#     is_artist = serializers.BooleanField(default=False) 

#     def validate(self, data):
#         user = authenticate(**data)
#         if user :
#             return user
#         raise serializers.ValidationError('Incorrect Credentials Passed.')

# and user.is_active

class Artist_Profile_Serializers(serializers.ModelSerializer):#change2
    class Meta:
        model = Artist
        fields = ['name' , 'lastname' , 'birth_date' , 'created_at' , 'email' ,'phone' ,'address']
        #fields = '__all__'


class Artist_Experience_Serializer(serializers.ModelSerializer):#change2
    class Meta:
        model = Artist
        fields = ['artfield', 'stylework', 'Experience_in_month']



class Sample_artwork_Serializer(serializers.ModelSerializer):#changw2
    class Meta:
        model = Sample_artwork
        fields =  ['name','artist','style','materials','description','date_created' , 'image']


class advertisementCreate(forms.ModelForm):
    class Meta :
        model = Artwork_advertisement
        fields = '__all__'



class Comment_Serializer(serializers.ModelSerializer):#changw2
    class Meta:
        model = Expert_comment
        fields = "__all__"




class Save_Comment_Serializer():

    class Meta:
        model = Expert_comment
        fields = ["artwork_advertisement", "expert", "description" , "price"]

    def save(self, **kwargs):
        User = self.context["request"].user
        expert = Expert.objects.get(User=User)
        validated_data = dict(
            list(self.validated_data.items()) +
            list(kwargs.items())
        )
        validated_data["expert"] = expert
        self.instance = self.create(validated_data)
        return self.instance










