from django.db import models

class Users(models.Model):
    first_name = models.CharField(max_length = 45)
    last_name = models.CharField(max_length = 45)
    email_address = models.CharField(max_length = 45)
    age = models.IntegerField ()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def __reprint__(self):
    return f"Users:{self.first_name} {self.last_name} {self.email_address} {self.age}"