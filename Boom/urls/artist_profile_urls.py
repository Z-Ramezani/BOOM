from django.urls import path
from Boom.views.artist_profile_views import *

urlpatterns = [
    path("details/<pk>",Artist_Profile_Datails.as_view()),
    path("list",Artist_Profile_Datails_list.as_view()),
    path("artists_experience/list", Artists_Experience_list.as_view()),
    path("artist_experience/datails/<pk>", Artist_Experience_Datails.as_view()),
    path("update/<pk>", Artist_Profile_Datails_update.as_view()),
    path("artist_experience/save/<pk>", Artist_Experience_Datails_save.as_view()),
    path("artist_experience/update/<pk>", Artist_Experience_Datails_update.as_view()),
    path("sample/save",Sample_artwork_save.as_view()),
    path("sample/edit/<pk>", Sample_artwork_Edit.as_view()),
    path("sample/list/<pk>", Sample_artwork_list_for_artist),
    path("sample/delete/<pk>", Sample_artwork_delete.as_view()),
    path("sample/get/<pk>", Sample_artwork_get.as_view()),
]
