# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-11-18 20:25
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('belt_app', '0003_auto_20191118_1927'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='trips', to='belt_app.User'),
        ),
    ]
