# Generated by Django 3.0.3 on 2020-04-18 23:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='password',
            field=models.CharField(default='sexykay1', max_length=122),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='username',
            field=models.CharField(default='kolikay', max_length=122),
            preserve_default=False,
        ),
    ]
