from urllib import response
from django.shortcuts import render, redirect
#from matplotlib import artist
#from requests import Response
from Boom.models import *
from Boom.serializers import *
from django.http import HttpResponse
from rest_framework import serializers
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.generics import *
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import generics
from django.views.generic.edit import DeleteView
from django.views.generic.edit import UpdateView
from django.views.generic.edit import CreateView
from django.views.generic.list import ListView
from django.views import View
from rest_framework.decorators import api_view,permission_classes
from Boom.permissions import *

# cbv crud

class add_advertisements(generics.CreateAPIView):
    permission_classes = [IsAuthenticated,]
    queryset = Artwork_advertisement.objects.all()
    serializer_class = AdvertisementSerializer
    
    def create(self, request, *args, **kwargs):
        artist = get_object_or_404(Artist, user=self.request.user)
        artist.decreaseToken()

        return super().create(request, *args, **kwargs)


class view_advertisements(generics.ListAPIView):
    permission_classes = [IsAuthenticated,]
    queryset = Artwork_advertisement.objects.all()
    serializer_class = AdvertisementSerializer


class update_advertisements(generics.RetrieveUpdateAPIView):
    permission_classes = [Is_artist_obj_managment_readonly]
    queryset = Artwork_advertisement.objects.all()
    serializer_class = AdvertisementSerializer


class delete_advertisements(generics.RetrieveDestroyAPIView):
    permission_classes = [Is_artist_obj_managment_readonly]
    queryset = Artwork_advertisement.objects.all()
    serializer_class = AdvertisementSerializer