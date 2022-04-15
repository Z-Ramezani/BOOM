from django.urls import path
from Boom.views import user_views as vi




urlpatterns = [

     path ('register' , vi.RegisterArtistAPI.as_view()),
     path('register/expert' , vi.RegisterExpertAPI.as_view()),
     path('register/customer' , vi.RegisterCustomerAPI.as_view()),
     path('login' , vi.LoginAPI.as_view()),
]
