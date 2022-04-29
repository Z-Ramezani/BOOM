# from operator import imod
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
# from Boom.models import Artist
from Boom.serializers import *
from rest_framework.generics import *
from rest_framework.permissions import IsAdminUser, IsAuthenticated
# from rest_framework import generics
# from ..models import Expert_comment , Artwork_advertisement
from rest_framework import status


@api_view(["POST"])
# @permission_classes([IsAuthenticated])
def review_artwork(request):
    if request.method == "POST":
        serializer = Save_Comment_Serializer(
            data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def reviews_of_artwork(request, artwork_id: int):
    artwork = Artwork_advertisement.objects.get(id=artwork_id)
    serializer = Comment_Serializer(artwork, many=True)

    return Response(serializer.data)