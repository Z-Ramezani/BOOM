from django.urls import path
from Boom.views import ad_views as adv




urlpatterns = [

     path('create_advertisement/' , adv.create_advertisement, name='create_advertisement'),
     path('edit_advertisement/<str:pk>' , adv.edit_advertisement, name='edit_advertisement'),
     path('delete_advertisement/<str:pk>' , adv.delete_advertisement, name='delete_advertisement'),
]