# Generated by Django 4.0.3 on 2022-04-03 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Boom', '0016_artist_created_at_artist_free_post_artwork_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artist',
            name='birth_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='free_post_artwork',
            field=models.IntegerField(default=2, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='phone',
            field=models.DecimalField(decimal_places=0, max_digits=11, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='artwork_advertisement',
            name='status',
            field=models.CharField(choices=[('sold', 'sold'), ('available', 'available')], max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='phone',
            field=models.DecimalField(decimal_places=0, max_digits=11, unique=True),
        ),
        migrations.AlterField(
            model_name='expert',
            name='phone',
            field=models.DecimalField(decimal_places=0, max_digits=11, unique=True),
        ),
    ]
