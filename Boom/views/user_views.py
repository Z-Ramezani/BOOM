# Django Import
from django.shortcuts import render
from django.http import JsonResponse
# from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
from Boom.models import Artist , Expert , Expert_comment , Artwork_advertisement , Customer , Sample_artwork  , Order_counter
from django.shortcuts import render,redirect
from Boom.serializers import advertisementCreate

from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response

from rest_framework import generics , permissions

from knox.models import AuthToken

from rest_framework.decorators import api_view

from rest_framework_simplejwt.tokens import RefreshToken

from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView

from ..serializers import RegisterCustomerSerializer, RegisterExpertSerializer , RegisterArtistSerializer  , UserSerializer  ,LoginSerializers, ArtistSerializer , ExpertSerializer , CustomerSerializer , LogInSerializer
from rest_framework import permissions
from Boom.permissions import *
from django.contrib.auth import get_user_model

User = get_user_model()







class SignUpArtistView(generics.CreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = RegisterArtistSerializer

class SignUpCustomerView(generics.CreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = RegisterCustomerSerializer

class SignUpExpertView(generics.CreateAPIView):
    queryset = Expert.objects.all()
    serializer_class = RegisterExpertSerializer





class RegisterExpertAPI(generics.GenericAPIView):
    serializer_class = RegisterExpertSerializer
    # permission_classes = [Is_anybody,]
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        res = {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

        return Response({
            "user": serializer.data,
            "refresh": res["refresh"],
            "token": res["access"]
        }, status=status.HTTP_201_CREATED)


class RegisterCustomerAPI(generics.GenericAPIView):
    serializer_class = RegisterCustomerSerializer
    # permission_classes = [Is_anybody,]
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        res = {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

        return Response({
            "user": serializer.data,
            "refresh": res["refresh"],
            "token": res["access"]
        }, status=status.HTTP_201_CREATED)






@api_view(['PUT'])
def update_artist(self , request , pk):

    req = request.data
    artist = Artist.objects.get(national_id_number=pk)
    user = User.objects.get(username=pk)
    user.username = req['national_id_number'],
    user.password = req['password'],
    artist.name=req['name'],
    artist.lastname=req['lastname'],
    artist.national_id_number=req['national_id_number'],
    artist.birth_date=req['birth_date'],
    artist.phone=req['phone'],
    artist.password=req['password'],

    artist.address=req['address'],
    artist.email=req['email'],
    artist.artfield=req['artfield'],
    artist.stylework=req['stylework'],
    artist.Experience_in_month=req['Experience_in_month'],
    
    artist.last_hipe_month=req['last_hipe_month'],
    artist.hipe_count=req['hipe_count']

    user.save()
    artist.save()
    serializer = ArtistSerializer(artist, many=False)
    return Response(serializer.data)





@api_view(['PUT'])
def update_expert(self , request , pk):

        req = request.data
        expert = Expert.objects.get(national_id_number=pk)
        user = User.objects.get(username=pk)
        user.username = req['national_id_number'],
        user.password = req['password'],
        expert.name=req['name'],
        expert.lastname=req['lastname'],
        expert.national_id_number=req['national_id_number'],
        expert.birth_date=req['birth_date'],
        expert.phone=req['phone'],
        expert.password=req['password'],

        user.save()
        expert.save()
        serializer = ExpertSerializer(expert, many=False)
        return Response(serializer.data)




@api_view(['PUT'])
def update_customer(self , request , pk):

    req = request.data
    customer = Customer.objects.get(national_id_number=pk)
    user = User.objects.get(username=pk)
    user.username = req['national_id_number'],
    user.password = req['password'],
    customer.name=req['name'],
    customer.lastname=req['lastname'],

    customer.phone=req['phone'],
    customer.password=req['password'],
    user.save()
    customer.save()
    serializer = CustomerSerializer(customer, many=False)
    return Response(serializer.data)


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializers
    # permission_classes = [Is_anybody,]

    def post(self, request):


        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data

        







        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]})


class LogInAPI(TokenObtainPairView):
    serializer_class = LogInSerializer




class Get_artist(generics.GenericAPIView):

    def get(self, request , pk):

        req = request.data
        artist = Artist.objects.get(national_id_number=pk)
        serializer = ArtistSerializer(artist, many=False)
        return Response(serializer.data)




class Get_expert(generics.GenericAPIView):

    def get(self, request , pk):

        req = request.data
        expert = Expert.objects.get(national_id_number=pk)
        serializer = ExpertSerializer(expert, many=False)
        return Response(serializer.data)

class Get_customer(generics.GenericAPIView):

    def get(self, request , pk):

        req = request.data
        customer = Customer.objects.get(national_id_number=pk)
        serializer = CustomerSerializer(customer, many=False)
        return Response(serializer.data)



class Get_artist_with_token(generics.GenericAPIView):
    serializer_class = ArtistSerializer
    def get(self, request , pk):

        artist = AuthToken.objects.get(digest=pk)
        test_user = artist.user
        # print (test_user)
        retUser = Artist.objects.get(user=test_user)
        serializer = ArtistSerializer(retUser, many=False)
        return Response(serializer.data)


class Get_expert_with_token(generics.GenericAPIView):
    serializer_class = ArtistSerializer
    def get(self, request , pk):

        expert = AuthToken.objects.get(digest=pk)
        test_user = expert.user
        # print (test_user)
        retUser = Expert.objects.get(user=test_user)
        serializer = ExpertSerializer(retUser, many=False)
        return Response(serializer.data)




class Get_customer_with_token(generics.GenericAPIView):
    serializer_class = ArtistSerializer
    def get(self, request , pk):

        customer = AuthToken.objects.get(digest=pk)
        test_user = customer.user
        # print (test_user)
        retUser = Customer.objects.get(user=test_user)
        serializer = CustomerSerializer(retUser, many=False)
        return Response(serializer.data)