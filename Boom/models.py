from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Artist(models.Model):
    name = models.CharField(max_length=200, null=True)
    lastname = models.CharField(max_length=200 , null=True)
    national_id_number = models.IntegerField()
    birth_date = models.DateTimeField()
    phone = models.IntegerField()
    password = models.CharField(max_length=200,null=True)
    user = models.OneToOneField(User, null=True , on_delete=models.CASCADE)
    def __str__(self):
        return self.name + " " +self.lastname

################################################################################


class Customer(models.Model):
    name = models.CharField(max_length=200 ,null=True)
    lastname = models.CharField(max_length=200 ,null=True)
    phone = models.IntegerField()
    password = models.CharField(max_length=200 ,null=True)
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    def __str__(self):
        return self.name + " " +self.lastname


################################################################################



class Expert(models.Model):
    name = models.CharField(max_length=200 ,null=True )
    lastname = models.CharField(max_length=200 ,null=True)
    national_id_number = models.IntegerField()
    birth_date = models.DateTimeField()
    phone = models.IntegerField()
    password = models.CharField(max_length=200 ,null=True)
    user = models.OneToOneField(User, null=True , on_delete=models.CASCADE)
    def __str__(self):
        return self.name + " " +self.lastname

################################################################################


class Artwork_advertisement (models.Model):
    name = models.CharField(max_length=200,null=True)
    style = models.CharField (max_length=200,null=True)
    artist = models.ForeignKey(Artist, null=True, on_delete=models.SET_NULL)
    description =  models.CharField (max_length=200,null=True)
    price = models.IntegerField(default=0)
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
    def __str__(self):
        return self.name



