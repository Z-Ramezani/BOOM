# Generated by Django 3.2.12 on 2022-03-30 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Boom', '0002_rename_coustomer_customer'),
    ]

    operations = [
        migrations.AddField(
            model_name='artwork_advertisement',
            name='description',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='artwork_advertisement',
            name='image_1',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='artwork_advertisement',
            name='image_2',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='artwork_advertisement',
            name='image_3',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='artwork_advertisement',
            name='image_4',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='artwork_advertisement',
            name='image_5',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='artwork_advertisement',
            name='status',
            field=models.CharField(choices=[('sold', 'sold'), ('available', 'available')], max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='artwork_advertisement',
            name='style',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='lastname',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='password',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='artwork_advertisement',
            name='name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='lastname',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='password',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='expert',
            name='lastname',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='expert',
            name='name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='expert',
            name='password',
            field=models.CharField(max_length=200, null=True),
        ),
    ]