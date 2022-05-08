from rest_framework import permissions
from django.contrib.auth.models import User
from Boom.models import Artist
from django.http import HttpResponse

class Is_anybody(permissions.BasePermission):# هر شخص
    def has_permission(self, request, view):
        return request.user.is_anonymous


class Is_authenticated_artist(permissions.BasePermission):#ورود صرفا هنرمند
    def has_permission(self, request, view):

           return bool(
               request.method in permissions.SAFE_METHODS and request.user or
               request.user.is_authenticated and
               request.user and request.user.user.is_artist
           )



class Able_to_advertise(permissions.BasePermission):
    def has_permission(self, request, view):
        try:
            username = request.user.username
            artist = Artist.objects.get(national_id_number=username)
            if (artist.free_post_artwork>0):
                return True
            else:
                return False
        except:
            return HttpResponse("You are not artist")




class Is_artist_or_Readonly(permissions.BasePermission):#ه منظور تغییر پروفایل یا تجربه برای هنرمند
    def has_object_permission(self, request, view, obj ):

        return bool(
            request.method in permissions.SAFE_METHODS and request.user or
            request.user.is_authenticated and
            request.user and request.user.user.is_artist and
            request.user == obj.user.user
        )


class Is_artist_obj_managment_readonly (permissions.BasePermission):#ه منظور مدیریت آگهی و نمونه کارها توسط شخص هنرمند

       def has_object_permission(self, request, view, obj ):
            return bool(
                request.method in permissions.SAFE_METHODS and request.user or
                request.user.is_authenticated and
                request.user and request.user.user.is_artist and
                request.user == obj.artist.user.user
            )

class Is_expert_or_Readonly(permissions.BasePermission):#به منظور تغییر پروفایل برای کارشناس
    def has_object_permission(self, request, view, obj ):

        return bool(
            request.method in permissions.SAFE_METHODS and request.user or
            request.user.is_authenticated and
            request.user and request.user.user.is_artist and
            request.user == obj.user.user
        )
class Is_authenticated_expert(permissions.BasePermission): # تشخیص صرفا کارشناس بودن
    def has_permission(self, request, view):

        return bool(
            request.method in permissions.SAFE_METHODS and request.user or
            request.user.is_authenticated and
            request.user and request.user.user.is_expert
        )


class Is_expert_obj_managment_readonly(permissions.BasePermission):#مدیریت کامنت توسط شخص کارشناس

    def has_object_permission(self, request, view, obj):
        return bool(
            request.method in permissions.SAFE_METHODS and request.user or
            request.user.is_authenticated and
            request.user and request.user.user.is_expert and
            request.user == obj.artist.user.user
        )

