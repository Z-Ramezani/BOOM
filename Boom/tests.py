# from django.test import TestCase , SimpleTestCase
import base64
import json # new
from django.contrib.auth import get_user_model
from .models import *
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase
from rest_framework.test import APIRequestFactory , force_authenticate


PASSWORD = 'pAssw0rd!'

def create_user(username='user@example.com', password=PASSWORD): # new
    return get_user_model().objects.create_user(
        username=username,
        first_name='Test',
        last_name='User',
        password=password
    )


class AuthenticationTest(APITestCase):
    # Function collapsed for clarity.
    def test_artist_can_sign_up(self):
        response = self.client.post(reverse('register'), data={
            'name': 'rrrrrr',
            # 'first_name': 'Test',
            'lastname': 'User',
            'national_id_number' : '7666',
            'password': PASSWORD,
            'phone' : '9127896372',
            'birth_date' : '2021-10-22'
            
        })
        user = Artist.objects.last()
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)
        self.assertEqual(response.data['id'], user.id)



    def test_expert_can_sign_up(self):
        response = self.client.post(reverse('register_expert'), data={
            'name': 'rrr',
            # 'first_name': 'Test',
            'lastname': 'User1',
            'national_id_number' : '7644',
            'password': PASSWORD,
            'phone' : '91278346372',
            'birth_date' : '2021-10-12'
            
        })
        user = Expert.objects.last()
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)
        self.assertEqual(response.data['id'], user.id)
        self.assertEqual(response.data['name'], user.name)

    def test_customer_can_sign_up(self):
        response = self.client.post(reverse('register_customer'), data={
            'name': 'rrrrrr',
            # 'first_name': 'Test',
            'lastname': 'User',
            'password': PASSWORD,
            'phone' : '9127890372',
            
        })
        user = Customer.objects.last()
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)
        self.assertEqual(response.data['id'], user.id)


    def test_user_can_log_in(self): # new
        user = create_user()
        response = self.client.post(reverse('loginn'), data={
            'username': user.username,
            'password': PASSWORD,
        })

        access = response.data['access']
        header, payload, signature = access.split('.')
        decoded_payload = base64.b64decode(f'{payload}==')
        payload_data = json.loads(decoded_payload)

        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertIsNotNone(response.data['refresh'])
        self.assertEqual(payload_data['username'], user.username)


###########################

class Artist_ProfileTest(APITestCase):
    def test_get_Artist_Profile(self):
        test_artist = self.client.post(reverse('register'), data={
            'name': 'Ali',
            'lastname': 'Sharifi',
            'national_id_number': '12222222',
            'password': PASSWORD,
            'phone': '9127896372',
            'birth_date': '2021-10-22'
        })
        user = Artist.objects.last()
        user.id = 1
        user.save()
        artist_profile = self.client.get("http://127.0.0.1:8000/artist_profile/details/1")
        self.assertEqual(status.HTTP_200_OK, artist_profile.status_code)
        self.assertEqual(artist_profile.data['name'],user.name )
        self.assertEqual(artist_profile.data['lastname'],user.lastname )
        self.assertEqual(int(artist_profile.data['phone']),int(user.phone))

    def test_update_Artist_Profile(self):
        test_artist = self.client.post(reverse('register'), data={
            'name': 'Ali',
            'lastname': 'Sharifi',
            'national_id_number': '12222222',
            'password': PASSWORD,
            'phone': '9127896372',
            'birth_date': '2021-10-22'
        })
        user = Artist.objects.last()
        user.id = 1
        user.save()
        self.client.login(username='12222222', password=PASSWORD)
        edit_profile = self.client.put("http://127.0.0.1:8000/artist_profile/update/1", data={
            "name": "Aliiiii",
            "lastname": "Sharifi",
            "birth_date": "2021-09-18",
            "created_at": "2022-05-24T19:32:24.176081+04:30",
            "email": '',
            "phone": "9125896378",
            "address": "This_address",
            "password": "YYYYY",
        })
        edited_user =  Artist.objects.last()
        self.assertEqual(status.HTTP_200_OK, edit_profile.status_code)
        self.assertEqual(edited_user.name, "Aliiiii")

    def test_post_Artist_Experience_Datails(self):
        test_artist = self.client.post(reverse('register'), data={
            'name': 'Ali',
            'lastname': 'Sharifi',
            'national_id_number': '12222222',
            'password': PASSWORD,
            'phone': '9127896372',
            'birth_date': '2021-10-22'
        })
        user = Artist.objects.last()
        user.id = 1
        user.save()
        self.client.login(username='12222222', password=PASSWORD)
        edit_experience = self.client.put("http://127.0.0.1:8000/artist_profile/artist_experience/save/1", data={
                "artfield": "نقاشی",
                "stylework": "سیاه قلم",
                "Experience_in_month": 23
        })
        user_edited = Artist.objects.last()
        self.assertEqual(status.HTTP_200_OK, edit_experience.status_code)
        self.assertEqual(user_edited.artfield,"نقاشی" )
        self.assertEqual(user_edited.stylework,"سیاه قلم" )
        self.assertEqual(user_edited.Experience_in_month,23 )

    def test_get_Artist_Experience_Datails(self):
        test_artist = self.client.post(reverse('register'), data={
            'name': 'Ali',
            'lastname': 'Sharifi',
            'national_id_number': '12222222',
            'password': PASSWORD,
            'phone': '9127896372',
            'birth_date': '2021-10-22'
        })
        user = Artist.objects.last()
        user.id = 1
        user.save()
        self.client.login(username='12222222', password=PASSWORD)
        edit_experience = self.client.put("http://127.0.0.1:8000/artist_profile/artist_experience/save/1", data={
            "artfield": "hh",
            "stylework": "hh",
            "Experience_in_month": 23
        })
        user_edited = Artist.objects.last()
        get_experience = self.client.get("http://127.0.0.1:8000/artist_profile/artist_experience/datails/1")
        self.assertEqual(status.HTTP_200_OK, edit_experience.status_code)
        self.assertEqual(status.HTTP_200_OK, get_experience.status_code)























        