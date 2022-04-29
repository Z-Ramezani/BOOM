from rest_framework.decorators import api_view
from rest_framework.response import Response
from Boom.models import Artist
from Boom.serializers import *
from rest_framework.generics import *
from rest_framework.permissions import IsAdminUser
from rest_framework import generics
@api_view(["GET"])
def Artist_Profile_Datails(request,pk):
    artist = Artist.objects.get(id=pk)
    artist_serializer = Artist_Profile_Serializers(artist,many=False)
    return Response(artist_serializer.data)


#@api_view(["POST"])
#def Artist_Profile_Datails_update(request,pk):
#    instance = Artist.objects.get(id=pk)
#    artist = Artist_Profile_Serializers(instance=instance,data=request.data)
#    if artist.is_valid():
#        artist.save()
#    return Response(artist.data)

class Artist_Profile_Datails_update(generics.RetrieveUpdateAPIView):
    queryset = Artist.objects.all()
    serializer_class = Artist_Profile_Serializers


@api_view(["GET"])
def Artist_Profile_Datails_list(request):
    artists = Artist.objects.all()
    artists_serializer = Artist_Profile_Serializers(artists, many=True)
    return Response(artists_serializer.data)

##################################

@api_view(["GET"])
def Artist_Experience_Datails(request,pk):
    artist = Artist.objects.get(id=pk)
    artist_serializer = Artist_Experience_Serializer(artist,many=False)
    return Response(artist_serializer.data)


@api_view(["GET"])
def Artists_Experience_list(request):
    artists = Artist.objects.all()
    artists_serializer = Artist_Experience_Serializer(artists, many=True)
    return Response(artists_serializer.data)

#@api_view(["POST"])
#def Artist_Experience_Datails_save(request):
#    artist = Artist_Experience_Serializer(data=request.data)
#    if artist.is_valid():
#        artist.save()
#    return Response(artist.data)

class Artist_Experience_Datails_save(generics.CreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = Artist_Experience_Serializer


class Artist_Experience_Datails_update(generics.RetrieveUpdateAPIView):
    queryset = Artist.objects.all()
    serializer_class = Artist_Experience_Serializer



#@api_view(["POST"])
#def Artist_Experience_Datails_update(request,pk):
#    instance = Artist.objects.get(id=pk)
#    artist = Artist_Experience_Serializer(instance=instance,data=request.data)
#    if artist.is_valid():
#        artist.save()
#    return Response(artist.data)

###########################

#@api_view(["POST"])
#def Sample_artwork_save(request):
#  sample = Sample_artwork_Serializer(data=request.data)
  #if sample.is_valid():
   #    sample.save()
 # return Response(sample.data)

class Sample_artwork_save(generics.CreateAPIView):
    queryset = Sample_artwork.objects.all()
    serializer_class = Sample_artwork_Serializer



###########################

#@api_view(["PUT"])
#def Sample_artwork_update(request,pk):
#    instance = Sample_artwork.objects.get(id=pk)
#    sample = Sample_artwork_Serializer(instance=instance,data=request.data)
#    if sample.is_valid():
#        sample.save()
#    return Response(sample.data)

class Sample_artwork_Edit(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sample_artwork.objects.all()
    serializer_class = Sample_artwork_Serializer


###########################

@api_view(["GET"])
def Sample_artwork_list_for_artist(request,pk):
    sample = Sample_artwork.objects.filter(artist = pk)
    sample_serializer = Sample_artwork_Serializer(sample, many=True)
    return Response(sample_serializer.data)

###########################

@api_view(["DELETE"])
def Sample_artwork_delete(request,pk):
    instance = Sample_artwork.objects.get(id=pk)
    instance.delete()
    return Response("Sample deleted")

##########################

@api_view(["GET"])
def Sample_artwork_get(request,pk):
    sample = Sample_artwork.objects.get(id=pk)
    sample_serializer = Sample_artwork_Serializer(sample,many=False)
    return Response(sample_serializer.data)

##########################

