from django.urls import path
from Boom.views import ad_views as adv
# from Boom.views.ad_views import MyView
from Boom.views import comment_view as comment




urlpatterns = [

     # path('users/<str:ArtistID>/create_advertisement' , adv.create_advertisement),
     # path('users/edit_advertisement/<str:pk>' , adv.edit_advertisement),
     # path('users/delete_advertisement/<str:pk>' , adv.delete_advertisement),
     path('create_advertisements/', adv.add_advertisements.as_view()),
     path('view_advertisements/', adv.view_advertisements.as_view()),
     path('<int:pk>/update_advertisements/', adv.update_advertisements.as_view()),
     path('<int:pk>/delete_advertisements/', adv.delete_advertisements.as_view()),
     path("review/create", comment.review_artwork),
     path("review/product/<int:artwork_id>", comment.reviews_of_artwork),
     path("hipe/<pk>", adv.Up_Ad),
     path("buy_ticket", adv.buy_ticket),
     path("get_advertisement/<pk>" , adv.get_advertisement.as_view()),
]