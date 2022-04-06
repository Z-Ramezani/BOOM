from django.urls import path
from Boom.views import user_views as vi
from rest_framework.routers import SimpleRouter

routes = SimpleRouter()

# AUTHENTICATION
# routes.register(r'auth/login', vi.LoginArtistAPI, basename='auth-login')

urlpatterns = [
    # *routes.urls ,
     path ('register' , vi.RegisterArtistAPI.as_view()),
     path('register/expert' , vi.RegisterExpertAPI.as_view()),
     path('register/customer' , vi.RegisterCustomerAPI.as_view()),
     path('login' , vi.LoginAPI.as_view()),
    #  path('login/customer' , vi.LoginCustomerAPI.as_view()),
    #  path('login/expert' , vi.LoginExpertAPI.as_view()),
]
# path('login/customer' , vi.LoginCustomerAPI.as_view()),
# path('artist' , vi.ArtistAPI.as_view())


# path('login/expert' , vi.LoginExpertAPI.as_view()),