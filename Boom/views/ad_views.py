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
    permission_classes = [Is_authenticated_artist,Able_to_advertise]
    queryset = Artwork_advertisement.objects.all()
    serializer_class = AdvertisementSerializer
    def perform_create(self, serializer):
        username = self.request.user.user.username
        artist = Artist.objects.get(national_id_number=username)
        order_counter_query = Order_counter.objects.all()
        order_counter = order_counter_query.first()
        artist.free_post_artwork = artist.free_post_artwork -1
        artist.save()
        serializer.save(artist=self.request.user.user,order_value = order_counter.order_counter)
        order_counter.order_counter = order_counter.order_counter + 1
        order_counter.save()

    # Artwork_advertisement.objects.get(Artist)
    # Artist.free_post_artwork_decreaser()
    # Artist.save()

@api_view(['GET'])
def buy_ticket(request):
    username = request.user.user.username
    artist = Artist.objects.filter(national_id_number=int(username))
    my_artist = artist.first()
    print(my_artist)
    my_artist.free_post_artwork = my_artist.free_post_artwork + 1
    my_artist.save()
    serializer = Artist_ticket_Serializers(data=artist, many=True)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def Up_Ad(request, pk):
    target_atad = Artwork_advertisement.objects.get(id=pk)
    order_counter_query = Order_counter.objects.all()
    order_counter = order_counter_query.first()
    target_atad.order_value=order_counter.order_counter
    target_atad.save()
    order_counter.order_counter=order_counter.order_counter+1
    order_counter.save()
    ad_list = Artwork_advertisement.objects.all().order_by('order_value')
    serializer = AdvertisementSerializer(data=ad_list, many=True)
    if serializer.is_valid():
         serializer.save()
    return  Response(serializer.data)










class view_advertisements(generics.ListAPIView):
    permission_classes = [IsAuthenticated,]
    queryset = Artwork_advertisement.objects.all()
    serializer_class = AdvertisementSerializer

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset().all().order_by('order_value')
        serializer = AdvertisementSerializer(queryset, many=True)
        return Response(serializer.data)


class update_advertisements(generics.RetrieveUpdateAPIView):
    permission_classes = [Is_artist_obj_managment_readonly]
    queryset = Artwork_advertisement.objects.all()
    serializer_class = AdvertisementSerializer


class delete_advertisements(generics.RetrieveDestroyAPIView):
    permission_classes = [Is_artist_obj_managment_readonly]
    queryset = Artwork_advertisement.objects.all()
    serializer_class = AdvertisementSerializer