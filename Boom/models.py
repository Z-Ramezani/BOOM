from django.db import models
from django.contrib.auth.models import User as users
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.conf import settings
# Create your models here.




class UserManager(BaseUserManager):

    def create_artist(self , username , password=None , **kwargs ):

        if username is None:
            raise TypeError('Users must have a username.')

        user = self.model(username = username)
        user.set_password(password)
        user.is_artist = True
        user.save(using=self._db)
        return user

    def create_expert(self , username , password=None , **kwargs ):

        if username is None:
            raise TypeError('Users must have a username.')

        user = self.model(username = username)
        user.set_password(password)
        user.is_expert = True
        user.save(using=self._db)
        return user

    def create_customer(self , username , password=None , **kwargs ):

        if username is None:
            raise TypeError('Users must have a username.')

        user = self.model(username = username)
        user.set_password(password)
        user.is_customer = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser ,models.Model):
    username = models.CharField(max_length=200 , null=True , unique=True)
    is_artist = models.BooleanField(default=False)
    is_expert = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False) 
    is_active = models.BooleanField(default=True) 

    objects=UserManager()

    USERNAME_FIELD='username'

class Artist(models.Model):
    name = models.CharField(max_length=200, null=True)
    lastname = models.CharField(max_length=200 , null=True)
    national_id_number = models.IntegerField(null=True , unique=True)
    birth_date = models.DateField(null=True , blank=True)
    phone = models.DecimalField(max_digits=11 , decimal_places=0 , null=True, blank=False, unique=True)
    password = models.CharField(max_length=200,null=True)
    free_post_artwork = models.IntegerField(null=True , default=2)
    created_at = models.DateTimeField(auto_now_add=True , null=True)
    user = models.OneToOneField(users, on_delete=models.SET_NULL, null=True)


    USERNAME_FIELD = 'national_id_number'
    objects = UserManager()

    def __str__(self):
        return self.name + " " +self.lastname

################################################################################


class Customer(models.Model):
    name = models.CharField(max_length=200 ,null=True)
    lastname = models.CharField(max_length=200 ,null=True)
    phone = models.DecimalField(max_digits=11 , decimal_places=0 , null=False, blank=False, unique=True)
    password = models.CharField(max_length=200 ,null=True)

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    USERNAME_FIELD = 'phone'

    objects = UserManager()




    def __str__(self):
        return self.name + " " +self.lastname


################################################################################



class Expert(models.Model):
    name = models.CharField(max_length=200 ,null=True )
    lastname = models.CharField(max_length=200 ,null=True)
    national_id_number = models.IntegerField(unique=True)
    birth_date = models.DateField()
    phone = models.DecimalField(max_digits=11 , decimal_places=0 , null=False, blank=False, unique=True)
    password = models.CharField(max_length=200 ,null=True)

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    USERNAME_FIELD = 'national_id_number'

    objects = UserManager()


    def __str__(self):
        return self.name + " " +self.lastname

################################################################################


class Artwork_advertisement (models.Model):
    name = models.CharField(max_length=200,null=True)
    style = models.CharField (max_length=200,null=True , blank=True)
    artist = models.ForeignKey(Artist, null=True, on_delete=models.SET_NULL)
    description =  models.CharField (max_length=200,null=True)
    price = models.IntegerField(default=0)
    examined_price = models.IntegerField(default=0)
    STATUS = {
        ('sold','sold'),
        ('available' ,'available'),
    }
    height_in_cm = models.FloatField()
    length_in_cm = models.FloatField()
    width_in_cm = models.FloatField()
    status = models.CharField(max_length=200, null=True, choices=STATUS)
    image_1 = models.ImageField(null=True , blank=True)
    image_2 = models.ImageField(null=True , blank=True)
    image_3 = models.ImageField(null=True , blank=True)
    image_4 = models.ImageField(null=True , blank=True)
    image_5 = models.ImageField(null=True , blank=True)
    createAt = models.DateTimeField(auto_now_add=True , null=True)
    def __str__(self):
        return self.name
