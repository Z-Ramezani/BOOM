from rest_framework import permissions
from django.contrib.auth.models import User

class Is_anybody(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_anonymous


class Is_authenticated_artist(permissions.BasePermission):
    def has_permission(self, request, view):

        return bool(
            request.method in permissions.SAFE_METHODS and request.user or
            request.user.is_authenticated and
            request.user and request.user.user.is_artist
        )



class Is_artist_or_Readonly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj ):

        return bool(
            request.method in permissions.SAFE_METHODS and request.user or
            request.user.is_authenticated and
            request.user and request.user.user.is_artist and
            request.user == obj.user.user
        )


class Is_artist_obj_managment_readonly (permissions.BasePermission):

       def has_object_permission(self, request, view, obj ):
            return bool(
                request.method in permissions.SAFE_METHODS and request.user or
                request.user.is_authenticated and
                request.user and request.user.user.is_artist and
                request.user == obj.artist.user.user
            )
