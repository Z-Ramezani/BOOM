from atexit import register
from django.urls import path
from Boom.views import user_views as vi




urlpatterns = [

     path ('register' , vi.SignUpArtistView.as_view() , name="register"),
     path('register/expert' , vi.SignUpExpertView.as_view(), name="register_expert"),
     path('register/customer' , vi.SignUpCustomerView.as_view(), name="register_customer"),
     path('login' , vi.LoginAPI.as_view(), name="login"),
     path('loginn' , vi.LogInAPI.as_view(), name="loginn"),
     path('get_artist/<pk>' , vi.Get_artist.as_view(), name="get_artist"),
     path('get_expert/<pk>' , vi.Get_expert.as_view(), name="get_expert"),
     path('get_customer/<pk>' , vi.Get_customer.as_view(), name="get_customer"),
     path('get_artist_with_token/<pk>' , vi.Get_artist_with_token.as_view() , name="get_artist_token"),
     path('get_expert_with_token/<pk>' , vi.Get_expert_with_token.as_view() , name="get_expert_token"),
     path('get_customer_with_token/<pk>' , vi.Get_customer_with_token.as_view() , name="get_customer"),
    # path('update' , vi.updatePassword),

]
