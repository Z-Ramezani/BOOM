from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import *
from Boom.models import Artist
from Boom.serializers import *
from rest_framework.generics import *
from rest_framework.permissions import IsAdminUser
from rest_framework import generics
from rest_framework import permissions
from Boom.permissions import *


class Artist_Profile_Datails(generics.RetrieveAPIView):
    queryset = Artist.objects.all()
    serializer_class = Artist_Profile_show_Serializers
    permission_classes = [IsAuthenticated]

class Artist_Profile_Datails_update(generics.RetrieveUpdateAPIView):
    queryset = Artist.objects.all()
    serializer_class = Artist_Profile_Serializers
    permission_classes = [Is_artist_or_Readonly,]

class Artist_Profile_Datails_list(generics.ListAPIView):
    queryset = Artist.objects.all()
    serializer_class = Artist_Profile_Serializers

class Artist_Experience_Datails(generics.RetrieveAPIView):
    queryset = Artist.objects.all()
    serializer_class = Artist_Experience_Serializer
    permission_classes = [Is_anybody,]

class Artists_Experience_list(generics.ListAPIView):
    queryset = Artist.objects.all()
    serializer_class = Artist_Experience_Serializer

class Artist_Experience_Datails_save(generics.RetrieveUpdateAPIView):
    queryset = Artist.objects.all()
    serializer_class = Artist_Experience_Serializer
    permission_classes = [Is_artist_or_Readonly,]

class Artist_Experience_Datails_update(generics.RetrieveUpdateAPIView):
    queryset = Artist.objects.all()
    serializer_class = Artist_Experience_Serializer
    permission_classes = [Is_artist_or_Readonly,]

class Sample_artwork_save(generics.CreateAPIView):
    queryset = Sample_artwork.objects.all()
    serializer_class = Sample_artwork_Serializer
    permission_classes = [Is_authenticated_artist,]
    def perform_create(self, serializer):
        serializer.save(artist=self.request.user.user)

class Sample_artwork_Edit(generics.RetrieveUpdateAPIView):
    queryset = Sample_artwork.objects.all()
    serializer_class = Sample_artwork_Serializer
    permission_classes = [Is_artist_obj_managment_readonly ,]

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def Sample_artwork_list_for_artist(request,pk):
    sample = Sample_artwork.objects.filter(artist = pk)
    sample_serializer = Sample_artwork_Serializer(sample, many=True)
    return Response(sample_serializer.data)

class Sample_artwork_delete(generics.DestroyAPIView):
    queryset = Sample_artwork.objects.all()
    serializer_class = Sample_artwork_Serializer
    permission_classes = [Is_artist_obj_managment_readonly  ,]

class Sample_artwork_get(generics.RetrieveAPIView):
    queryset = Sample_artwork.objects.all()
    serializer_class = Sample_artwork_Serializer
    permission_classes = [IsAuthenticated,]
