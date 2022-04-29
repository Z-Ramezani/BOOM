from django.urls import path
from Boom.views import ad_views as adv
from Boom.views import comment_view as comment





urlpatterns = [

     path('create_advertisement/' , adv.create_advertisement, name='create_advertisement'),
     path('edit_advertisement/<str:pk>' , adv.edit_advertisement, name='edit_advertisement'),
     path('delete_advertisement/<str:pk>' , adv.delete_advertisement, name='delete_advertisement'),
     path("review/create", comment.review_artwork),
     path("review/product/<int:artwork_id>", comment.reviews_of_artwork)
]