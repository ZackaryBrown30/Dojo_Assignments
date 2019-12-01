from django.shortcuts import render, redirect 
from django.contrib import messages

from apps.semi_apps.models import *

def update(request, show_id):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/update/' + str(show_id))
    else:
        subject = Show.objects.get(id = show_id)
        subject.title = request.POST['title']
        subject.network = request.POST['network']
        subject.release_date = request.POST['release']
        subject.description = request.POST['description']
        subject.save()
        messages.success(request, "Successfully updated")
        return redirect('/all_shows')

def index(request): #, show_id
    return render(request, 'semi_apps/index.html') # context

def post(request):
    title = request.POST["title"]
    net = request.POST["network"]
    desc = request.POST["description"]
    release = request.POST["release"]
    show = Show.objects.create(title = title, network = net, release_date = release, description = desc)
    return redirect('/show/'+str(show.id))

def show(request, show_id):
    return render(request, 'semi_apps/show.html', {'show' : Show.objects.get(id = show_id)}) 

def all_shows(request):
    return render(request, 'semi_apps/all_shows.html', {'all_shows' : Show.objects.all()})

def delete(request, show_id):
    dead_show = Show.objects.get(id = show_id)
    dead_show.delete()
    return redirect('/all_shows')

def update_view(request, show_id):
    if request.method =="GET":
        return render (request, "semi_apps/edit.html", {"show" : Show.objects.get(id= show_id)})

