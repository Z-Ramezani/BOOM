from django.urls import path
from Boom.views.expertProfile_views import *

urlpatterns = [
    path ("details/<pk>" , Expert_Profile_Details.as_view()),
    path ("records/<pk>" , Expert_Profile_Records),
]