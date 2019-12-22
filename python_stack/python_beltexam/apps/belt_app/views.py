from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages

from apps.belt_app.models import *
import bcrypt

def index(request): 
    request.session.clear()
    return render(request,'login_app/index.html')

def register(request):
    error = User.objects.basic_validator(request.POST)

    if len(error) > 0:
        for key, value in error.items():
            messages.error(request, value)
        return redirect('/')
    else:
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        email = request.POST["email"]
        password = request.POST["password"]
        pw_confirm = request.POST["pw_confirm"]
        hashed_pw = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        User.objects.create(first_name = first_name, last_name = last_name, email = email, password = hashed_pw)

        logged_user = User.objects.get(email=request.POST['email'])
        request.session['user_id'] = logged_user.id
        request.session['first_name'] = first_name
        request.session['logged_in'] = True
        return redirect('/dashboard')

def dashboard(request):
    if 'logged_in' in request.session:
        context = {
            'my_trips' : User.objects.get(id = request.session['user_id'])
        }
        return render( request, "login_app/dashboard.html", context)
    else:
        messages.error(request,"User not recognized")
        return redirect("/")


def login(request):
    user = User.objects.filter(email=request.POST['email']) 
    if user:
        logged_user = user[0]

        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['user_id'] = logged_user.id
            request.session['logged_in'] = True
            request.session['first_name'] = logged_user.first_name
            return redirect('/dashboard')
        else:
                messages.error(request, "Password is not correct")
                return redirect("/")

    messages.error(request, "The email was not found")
    return redirect("/")

def logout(request): 
    request.session.clear()
    return redirect('/')

def new_trip(request):
    error = Trip.objects.trip_validations(request.POST)
    if len(error) > 0:
        for key, value in error.items():
            messages.error(request, value)
        return redirect('/trips')
    else:
        destination = request.POST["destination"]
        plan = request.POST["plan"]
        start_date = request.POST["start_date"]
        end_date = request.POST["end_date"]
        this_user = User.objects.get(id = request.session['user_id'])
        Trip.objects.create(destination = destination, plan = plan, start_date = start_date, end_date = end_date, user = this_user)
        return redirect ('/dashboard')

def trip(request):
    return render (request,'login_app/new_trip.html')

def view(request, trip_id):
    return render(request, 'login_app/view_trip.html', {'trip' : Trip.objects.get(id = trip_id)}) 

def delete(request, trip_id):
    dead_trip = Trip.objects.get(id = trip_id)
    dead_trip.delete()
    return redirect('/dashboard')

def update_view(request, trip_id):
    return render (request, "login_app/edit.html", {"trip" : Trip.objects.get(id= trip_id)})

def update(request, trip_id):
    errors = Trip.objects.trip_validations(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/update/' + str(trip_id))
    else:
        subject = Trip.objects.get(id = trip_id)
        subject.plan = request.POST['plan']
        subject.destination = request.POST['destination']
        subject.start_date = request.POST['start_date']
        subject.end_date = request.POST['end_date']
        subject.save()
        return redirect('/dashboard')