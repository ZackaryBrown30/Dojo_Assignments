from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages

from apps.wall_app.models import *
import bcrypt

def index(request): 
    return render(request,'login_app/index.html')

def register(request):
    error = User.objects.basic_validator(request.POST)

    if len(error) > 0:
        for key, value in error.items():
            messages.error(request, value)
        print("DATA HAD ERRORS")
        return redirect('/')
    else:
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        email = request.POST["email"]
        password = request.POST["password"]
        pw_confirm = request.POST["pw_confirm"]
        hashed_pw = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        User.objects.create(first_name = first_name, last_name = last_name, email = email, password = hashed_pw)
        print("creatingUSER")
        logged_user = User.objects.get(email=request.POST['email'])
        request.session['user.id'] = logged_user.id
        request.session['logged_in'] = True
        return redirect('/wall')

def login(request):
    user = User.objects.filter(email=request.POST['email']) 
    if user:
        logged_user = user[0]

        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['user_id'] = logged_user.id
            request.session['logged_in'] = True
            request.session['first_name'] = logged_user.first_name
            return redirect('/wall')
        else:
                messages.error(request, "Password is not correct")
                return redirect("/")

    messages.error(request, "The email was not found")
    return redirect("/")

def wall(request):
    if 'logged_in' in request.session:
        context = {
            'all_messages' : Message.objects.all(),
            'all_comments' : Comment.objects.all()
        }
        return render( request, "login_app/wall.html", context)
    else:
        messages.error(request,"User not recognized")
        return redirect("/")

def logout(request): 
    request.session.clear()
    return redirect('/')

def post_message(request):
    user = User.objects.get(id = request.session['user_id'])
    message = request.POST['message']
    Message.objects.create(message=message, user = user)
    return redirect('/wall')

    # message = request.POST['message']
    # description = request.POST['description']
    # user = User.objects.get(id = user_id)
    # mess = Message.objects.create(message = message, description = description)
    # mess.User.add(User.objects.get(id = user_id))

# def post_comment(request):
#     message = Message.objects.get(id = request.POST[])
#         return HttpResponse("placeholder to later display Comments")

# def comment(request):
#     comment = Comment.objects.cereate(comment = )
#     delete_comment.delete()
#     return redirect('/wall'

def delete_comment(request, comment_id):
    delete_comment = Comment.objects.get( id = comment_id)
    delete_comment.delete()
    return redirect('/wall')