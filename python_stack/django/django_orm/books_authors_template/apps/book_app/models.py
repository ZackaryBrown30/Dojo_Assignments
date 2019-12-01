from django.db import models

class Books(models.Model):
    title = models.CharField(max_length=25)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
#Authors name calls on Books Author Attribute
class Author(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25, blank = True)
    books = models.ManyToManyField(Books, related_name="Authors")
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now = True)