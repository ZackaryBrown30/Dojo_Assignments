from __future__ import unicode_literals
from django.db import models

class show_Manager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['title']) < 2:
            errors['title'] = 'blog name should be at least 5 Characters homie'
        if len(postData['network']) < 3:
            errors['network'] = "Netowrk should be at least 5 Characters homie"
        if len(postData['description']) < 10:
            errors['description'] = "Description should be at least Ten Characters homie"
        return errors


class Show(models.Model):
    title = models.CharField(max_length = 45)
    network = models.CharField(max_length = 45)
    release_date = models.DateField(auto_now = False, auto_now_add = False)
    description = models.TextField(null = True)
    created_at = models.DateTimeField(auto_now = True)
    updated_at = models.DateTimeField(auto_now_add = True)
    objects = show_Manager()
