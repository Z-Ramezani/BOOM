# from django.test import TestCase , SimpleTestCase
import base64
import json # new
from django.contrib.auth import get_user_model
from .models import *
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase

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







        