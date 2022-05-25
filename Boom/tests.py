from django.test import TestCase , SimpleTestCase

# Create your tests here.


class test_login_signup_and_comment(SimpleTestCase):

    def test_login(self):

        response = self.client.get('/users/login')
        self.assertEqual(response.status_code, 200)


    def test_register(self):


        response = self.client.get('/users/register')
        self.assertEqual(response.status_code, 200)



    def test_register_expert(self):

        response = self.client.get('/users/register/expert')
        self.assertEqual(response.status_code, 200)



    def test_register_customer(self):

        response = self.client.get('/users/register/customer')
        self.assertEqual(response.status_code, 200)




        