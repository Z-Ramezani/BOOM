# Django Import 
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
from Boom.models import *
from django.shortcuts import render,redirect
from Boom.serializers import *
# Rest Framework Import
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
# from rest_framework.serializers import Serializer
from rest_framework import generics , permissions
# from rest_framework.authtoken.models import Token
# from rest_framework.viewsets import ModelViewSet
from knox.models import AuthToken
# from rest_framework.permissions import AllowAny
# from rest_framework.generics import RetrieveAPIView
from rest_framework.decorators import api_view
# Rest Framework JWT 
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework_simplejwt.exceptions import TokenError, InvalidToken

#Local import

# from ..models import Artist , Expert , Artwork_advertisement , Customer
from ..serializers import RegisterCustomerSerializer, RegisterExpertSerializer , RegisterArtistSerializer  , UserSerializer  , LoginSerializers
from rest_framework import permissions
from Boom.permissions import *





class RegisterArtistAPI(generics.GenericAPIView):
    serializer_class = RegisterArtistSerializer
    permission_classes = [Is_anybody,]
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






class RegisterExpertAPI(generics.GenericAPIView):
    serializer_class = RegisterExpertSerializer
    permission_classes = [Is_anybody,]
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
    permission_classes = [Is_anybody,]
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





# class LoginAPI(generics.GenericAPIView):
#     serializer_class = LoginSerializers

#     def post(self, request):
        

#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data
        
#         return Response({
#             "user": UserSerializer(user, context=self.get_serializer_context()).data,
#             "token": AuthToken.objects.create(user)[1]})



class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializers
    permission_classes = [Is_anybody,]
    def post(self, request):
        

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data


        
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]})