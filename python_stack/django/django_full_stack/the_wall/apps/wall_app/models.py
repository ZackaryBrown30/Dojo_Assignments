from django.db import models
# from datetime import date
import re


# now = date.today().isoformat()

# used for date time validations in relation to now

class Ver_Manager(models.Manager):
    def basic_validator(self, postData):
        error = {}

        first_name = postData['first_name']
        last_name = postData['last_name']

        if User.objects.filter(email=postData['email']):
            error['emaildupe'] = "User already has an account with that email address"
            return error
        if not((len(first_name) >2 ) & str.isalpha(first_name)):
            error["first_name"] = "First name should be populated"
        if not((len(last_name) >2 ) & str.isalpha(last_name)):
            error["last_name"] = "Last name should be populated"

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):
            error['email'] = ("Email address is invalid!")

        if len(postData['password']) < 8:
            error['password'] = "Password too short"
        if (postData['password'])!= (postData['pw_confirm']):
            error["pw_confirm"] = "Passwords do not match"

        return error

class User(models.Model):
    first_name = models.CharField(max_length = 45)
    last_name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 55)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    objects = Ver_Manager()


class Message(models.Model):
    
    message = models.TextField()
    # description = models.TextField(null = True)
    created_at = models.DateTimeField(auto_now = True)
    updated_at = models.DateTimeField(auto_now_add = True)
    user = models.ForeignKey(User, related_name="messages")
    # objects = Ver_Manager()

class Comment(models.Model):

    comment = models.TextField()
    created_at = models.DateTimeField(auto_now = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    user = models.ForeignKey(User, related_name='comments_to_users')
    message = models.ForeignKey(Message, related_name="comments_to_messages")

# #Original Condition before attempting to switch placement of ForeignKeys
# class Message(models.Model):
    
#     message = models.TextField()
#     # description = models.TextField(null = True)
#     created_at = models.DateTimeField(auto_now = True)
#     updated_at = models.DateTimeField(auto_now_add = True)

#     user = models.ForeignKey(User, related_name="messages")
#     # objects = Ver_Manager()

# class Comment(models.Model):

#     comment = models.TextField()
#     created_at = models.DateTimeField(auto_now = True)
#     updated_at = models.DateTimeField(auto_now_add = True)

#     message = models.ForeignKey(Message, related_name="comments")
#     user = models.ForeignKey(User, related_name='comments')