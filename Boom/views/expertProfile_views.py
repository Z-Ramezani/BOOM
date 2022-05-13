from requests import request
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

class Expert_Profile_Details(generics.RetrieveAPIView):
    queryset = Expert.objects.all()
    serializer_class = ExpertinfoSerializer
    permission_classes = [IsAuthenticated]

# class Expert_Profile_Records(generics.RetrieveAPIView):
#     QuerySet = Expert_comment.objects.get(Expert = pk)
#     serializer_class = ExpertRecordsSerializer
#     permission_classes = [IsAuthenticated]

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def Expert_Profile_Records(request, pk):
    record = Expert_comment.objects.filter(expert = pk)
    record_serializer = ExpertRecordsSerializer(record, many=True)
    return Response(record_serializer.data)
