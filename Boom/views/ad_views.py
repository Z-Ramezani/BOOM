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
# def create_advertisement (request, artistID):
#     list = advertisementCreate()
#     if request.method == 'POST':
#         list = advertisementCreate(request.POST)
#         if list.is_valid():
#             artist = Artist.objects.get(id = artistID)
#             artist.free_post_artwork_decreaser()
#             list.save()
#             return redirect('/')
#     context = {'list' : list}
#     return render(request, 'Front', context)

# def edit_advertisement (request, pk):
#     artwork = Artwork_advertisement.objects.get(id=pk)
#     list = advertisementCreate(instance=artwork)
#     if request.method == 'POST':
#         list=advertisementCreate(request.POST, instance = artwork)
#         if list.is_valid():
#             list.save()
#             return redirect('/')

#     context = {'list' : list}
#     return render(request, 'Front', context)

# def delete_advertisement (request, pk):
# artwork = Artwork_advertisement.objects.get(id=pk)
# if request.method == 'POST':
#     list.delete()
#     return redirect('/')
# context = {'list' : list}
# return render(request, 'Front', context)

# drf crud

# @api_view(['POST'])
# def add_advertisements(request):
#     advertisement = AdvertisementSerializer(data=request.data)
#     if advertisement.is_valid():
#         advertisement.save()
#         artist = Artist.objects.get(national_id_number = request.data.get("national_id_number") )
#         artist.free_post_artwork_decreaser()
#         artist.save()
#         return Response(advertisement.data)
#     else:
#         return Response(status=status.HTTP_404_NOT_FOUND)

# @api_view(['GET'])
# def view_advertisements(request):
#     if request.query_params:
#         advertisements = Artwork_advertisement.objects.filter(**request.query_param.dict())
#     else :
#         advertisements = Artwork_advertisement.objects.all()
#     if advertisements:
#         data = AdvertisementSerializer(advertisements)
#         return Response(data)
#     else:
#         return Response(status=status.HTTP_404_NOT_FOUND)


# @api_view(['PUT'])
# def update_advertisements(request, pk):
#     advertisement = Artwork_advertisement.objects.get(pk=pk)
#     data = AdvertisementSerializer(instance=advertisement, data=request.data)
#     if data.is_valid():
#         data.save()
#         return Response(data.data)

# @api_view(['DELETE'])
# def delete_advertisements(request, pk):
# 	advertisement = get_object_or_404(Artwork_advertisement, pk=pk)
# 	advertisement.delete()
# 	return Response(status=status.HTTP_202_ACCEPTED)

# cbv crud

class add_advertisements(generics.CreateAPIView):
    permission_classes = [IsAuthenticated,]
    queryset = Artwork_advertisement.objects.all()
    serializer_class = AdvertisementSerializer
    # Artwork_advertisement.objects.get(Artist)
    # Artist.free_post_artwork_decreaser()
    # Artist.save()


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