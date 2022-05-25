from pyexpat import model
from django.db import models
from django.contrib.auth.models import  AbstractUser
from django.conf import settings
from datetime import datetime,date
from django.db.models.fields import BLANK_CHOICE_DASH
from django.conf import settings
# Create your models here.





# class UserManager(BaseUserManager):

    # def create_artist(self , username , password=None , **kwargs ):

    #     if username is None:
    #         raise TypeError('Users must have a username.')

    #     user = self.model(username = username)
    #     user.set_password(password)
    #     user.is_artist = True
    #     user.user = users.objects.get(username=username)
    #     user.save(using=self._db)
    #     return user

    # def create_expert(self , username , password=None , **kwargs ):

    #     if username is None:
    #         raise TypeError('Users must have a username.')

    #     user = self.model(username = username)
    #     user.set_password(password)
    #     user.is_expert = True
    #     user.user = users.objects.get(username=username)
    #     user.save(using=self._db)
    #     return user

    # def create_customer(self , username , password=None , **kwargs ):

    #     if username is None:
    #         raise TypeError('Users must have a username.')

    #     user = self.model(username = username)
    #     user.set_password(password)
    #     user.is_customer = True
    #     user.user = users.objects.get(username=username)
    #     user.save(using=self._db)
    #     return user

class User(AbstractUser):

    is_artist = models.BooleanField(default=False)
    is_expert = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False) 


class Artist(models.Model):
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200 )
    national_id_number = models.IntegerField(unique=True)
    birth_date = models.DateField(null=True, blank=True)
    phone = models.DecimalField(max_digits=11 , decimal_places=0 , unique=True)
    password = models.CharField(max_length=200)
    free_post_artwork = models.IntegerField(default=2)
    created_at = models.DateTimeField(auto_now_add=True)
    address = models.CharField(max_length=400, null=True)#change2
    email = models.EmailField(max_length=254,unique=True, null=True)#change2
    artfield = models.CharField(max_length=200, null=True)#change2
    stylework =  models.CharField(max_length=200, null=True)#change2
    Experience_in_month = models.IntegerField(null=True)#change2
    budget = models.IntegerField(default=10000000, null=True)
    last_hipe_month = models.IntegerField(default=0, null=True)
    hipe_count = models.IntegerField(default=2, null=True)
  #  _id = models.AutoField(primary_key=True, editable=False)#change2
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)


    #USERNAME_FIELD = 'national_id_number'
    # objects = UserManager()

    def __str__(self):
        return self.name + " " +self.lastname

################################################################################


class Customer(models.Model):
 #   _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    phone = models.DecimalField(max_digits=11 , decimal_places=0 , unique=True )
    password = models.CharField(max_length=200 ,null=True)

    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)

   # USERNAME_FIELD = 'phone'

    # objects = UserManager()




    def __str__(self):
        return self.name + " " +self.lastname


################################################################################



class Expert(models.Model):
#    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    national_id_number = models.IntegerField(unique=True )
    birth_date = models.DateField()
    phone = models.DecimalField(max_digits=11 , decimal_places=0 , unique=True)
    password = models.CharField(max_length=200 ,null=True)
#21
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)

   # USERNAME_FIELD = 'national_id_number'

    # objects = UserManager()


    def __str__(self):
        return self.name + " " +self.lastname

################################################################################


class Artwork_advertisement (models.Model):
#    _id = models.AutoField(primary_key=True, editable=False)

    name = models.CharField(max_length=200)
    style = models.CharField (max_length=200,)
    artist = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    description =  models.CharField (max_length=200,null=True,blank=True)
    price = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    #examined_price = models.IntegerField(default=0) change2

    Admin_perm = models.BooleanField(default=False)
    STATUS = {
        ('sold','sold'),
        ('available' ,'available'),
    }
    length_in_cm = models.FloatField()
    width_in_cm = models.FloatField()
    order_value = models.IntegerField(default=0)
    Hipe = models.BooleanField(default=False)
    Hipe_num = models.IntegerField(default=0)
    status = models.CharField(max_length=200, null=True, choices=STATUS)
    image_1 = models.ImageField(upload_to='Boom/media')
    image_2 = models.ImageField(upload_to='Boom/media')
    image_3 = models.ImageField(upload_to='Boom/media')
    image_4 = models.ImageField(upload_to='Boom/media')
    image_5 = models.ImageField(upload_to='Boom/media')
    createAt = models.DateTimeField(auto_now_add=True , null=True)
    date = models.DateField(null=True , blank=True)

    def __str__(self):
        return self.name



################################################################################


class Expert_comment(models.Model):#change2
  #  _id = models.AutoField(primary_key=True, editable=False)
    artwork_advertisement = models.ForeignKey(Artwork_advertisement,null=True, on_delete=models.SET_NULL)
    expert = models.ForeignKey(Expert, on_delete=models.SET_NULL,null=True)
    description = models.CharField(max_length=200, null=True)
    price = models.IntegerField(default=0)
    createAt = models.DateTimeField(auto_now_add=True)
    fieldofExpertise = models.CharField(max_length=200, null=True)
    backgroundinMonth = models.DecimalField(max_digits=10, decimal_places=0, null=False, blank=False,default=0)  # سابقه کاری
    def __str__(self):
        return self.expert.name + " " + self.artwork_advertisement.name

################################################################################

class Sample_artwork(models.Model):#change2
   # _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200)
    artist = models.ForeignKey(User,null=True, on_delete=models.SET_NULL)
    style = models.CharField(max_length=200)
    materials = models.CharField(max_length=200, null=True, blank=True)
    date_created = models.DateField(auto_now_add=True )
    image = models.ImageField(upload_to='Boom/media')
    description = models.CharField(max_length=200)


#################################################################################



class Order_counter(models.Model):
    order_counter = models.IntegerField(default=1)
