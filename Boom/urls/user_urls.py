from django.urls import path
from Boom.views import user_views as vi




urlpatterns = [

     path ('register' , vi.RegisterArtistAPI.as_view()),
     path('register/expert' , vi.RegisterExpertAPI.as_view()),
     path('register/customer' , vi.RegisterCustomerAPI.as_view()),
     path('login' , vi.LoginAPI.as_view()),
     path('get_artist/<pk>' , vi.Get_artist.as_view()),
     path('get_expert/<pk>' , vi.Get_expert.as_view()),
     path('get_customer/<pk>' , vi.Get_customer.as_view()),
     #path('get_artist_with_token/<pk>' , vi.Get_artist_with_token.as_view()),
    # path('update' , vi.updatePassword),

]
