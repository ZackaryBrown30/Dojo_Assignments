# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-11-12 22:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='author',
            name='dasbooks',
        ),
        migrations.AddField(
            model_name='author',
            name='books',
            field=models.ManyToManyField(related_name='Books', to='book_app.Books'),
        ),
    ]
