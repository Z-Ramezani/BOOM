from venv import create
from webbrowser import get
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from django.contrib.auth.models import User as users
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import *
# from django.contrib.auth import authenticate
# from rest_framework_simplejwt.settings import api_settings
# from django.contrib.auth.models import update_last_login
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
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
        fields = ['username', 'password', 'is_active', 'is_artist', 'is_expert', 'is_customer']


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ['name', 'lastname', 'birth_date', 'phone', 'national_id_number', 'free_post_artwork', 'created_at',
                  'password']


class ExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = ['name', 'lastname', 'birth_date', 'phone', 'national_id_number']


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['name', 'lastname', 'phone']


class RegisterArtistSerializer(ArtistSerializer):
    class Meta:
        model = Artist
        fields = ['name', 'lastname', 'birth_date', 'phone', 'national_id_number', 'password', ]
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

        return user1


class RegisterExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = ['name', 'lastname', 'birth_date', 'phone', 'national_id_number', 'password', ]
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

        return user1


class RegisterCustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['name', 'lastname', 'phone', 'password']
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

class Artist_Profile_Serializers(serializers.ModelSerializer):  # change2
    class Meta:
        model = Artist
        fields = ['name', 'lastname', 'birth_date', 'created_at', 'email', 'phone', 'address', 'password']
        # fields = '__all__'


class Artist_Profile_show_Serializers(serializers.ModelSerializer):  # change2
    class Meta:
        model = Artist
        fields = ['name', 'lastname', 'birth_date', 'created_at', 'email', 'phone']
        # fields = '__all__'


class Artist_ticket_Serializers(serializers.ModelSerializer):  # change2
    class Meta:
        model = Artist
        fields = ['free_post_artwork']


class Artist_Experience_Serializer(serializers.ModelSerializer):  # change2
    class Meta:
        model = Artist
        fields = ['artfield', 'stylework', 'Experience_in_month']


class Sample_artwork_Serializer(serializers.ModelSerializer):  # changw2
    class Meta:
        model = Sample_artwork
        fields = ['name', 'artist', 'style', 'materials', 'description', 'date_created', 'image']
        extra_kwrags = {'artist': {'required': False}}
        read_only_fields = ['artist', 'date_created']


class advertisementCreate(forms.ModelForm):
    class Meta:
        model = Artwork_advertisement
        # fields = '__all__'
        fields = ['name', 'style', 'artist', 'length_in_cm', 'width_in_cm', 'date', 'description']
        extra_kwrags = {'artist': {'required': False}}
        read_only_fields = ['artist']


class AdvertisementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork_advertisement
        # fields = '__all__'
        fields = ['id', 'name', 'style', 'artist', 'length_in_cm', 'width_in_cm', 'date', 'description', 'price', 'image_1',
                  'image_2', 'image_3', 'image_4', 'image_5','likes','dislikes']
        extra_kwrags = {'artist': {'required': False}}
        read_only_fields = ['artist']


class Comment_Serializer(serializers.ModelSerializer):  # changw2
    class Meta:
        model = Expert_comment
        fields = "__all__"


class Save_Comment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Expert_comment
        fields = ["artwork_advertisement", "expert", "description", "price"]

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
class ExpertinfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = ["name", "lastname", "phone", "createAt", "fieldofExpertise", "backgroundinMonth"]

class ExpertRecordsSerializer(serializers.ModelSerializer):
    art_name = serializers.ReadOnlyField(source = 'artwork_advertisement.name')
    art_length_in_cm = serializers.ReadOnlyField(source = 'artwork_advertisement.length_in_cm')
    art_width_in_cm = serializers.ReadOnlyField(source = 'artwork_advertisement.width_in_cm')
    art_style = serializers.ReadOnlyField(source = 'artwork_advertisement.style')
    art_createAt = serializers.ReadOnlyField(source = 'artwork_advertisement.createAt')
    art_description = serializers.ReadOnlyField(source = 'artwork_advertisement.description')
    art_price = serializers.ReadOnlyField(source = 'artwork_advertisement.price')
    art_image_1 = serializers.ReadOnlyField(source = 'artwork_advertisement.image_1')
    art_image_2 = serializers.ReadOnlyField(source = 'artwork_advertisement.image_2')
    art_image_3 = serializers.ReadOnlyField(source = 'artwork_advertisement.image_3')
    art_image_4 = serializers.ReadOnlyField(source = 'artwork_advertisement.image_4')
    art_image_5 = serializers.ReadOnlyField(source = 'artwork_advertisement.image_5')

    class Meta:
        model = Expert_comment
        fields = ["art_name", "price", "description", 'art_height_in_cm', 'art_length_in_cm',
                  'art_width_in_cm', 'art_style', 'art_createAt', 'art_description', 'art_price',
                  'art_image_1', 'art_image_2', 'art_image_3', 'art_image_4', 'art_image_5']



