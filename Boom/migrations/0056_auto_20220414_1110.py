# Generated by Django 3.2.12 on 2022-04-14 06:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Boom', '0055_auto_20220410_2249'),
    ]

    operations = [
        migrations.AddField(
            model_name='artist',
            name='address',
            field=models.CharField(max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='artwork_advertisement',
            name='status',
            field=models.CharField(choices=[('sold', 'sold'), ('available', 'available')], max_length=200, null=True),
        ),
    ]
