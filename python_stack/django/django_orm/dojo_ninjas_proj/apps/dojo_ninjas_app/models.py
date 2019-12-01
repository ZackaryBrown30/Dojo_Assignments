from django.db import models

class Dojo(models.Model):
    name = models.CharField(max_length=45)
    city = models.CharField(max_length=25)
    state = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Ninja(models.Model):
    last_name = models.CharField(max_length=25)
    first_name = models.CharField(max_length=25)
    dojo = models.ForeignKey(Dojo, related_name="ninjas")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    