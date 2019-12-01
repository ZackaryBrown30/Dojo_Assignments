from django.shortcuts import render, redirect, HttpResponse
from time import gmtime, strftime
from django.utils.crypto import get_random_string

def index(request):
    context = {
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
    }
    return render(request,'project_apps/index.html', context)

def random_word(request):
    context = {
        "random_word": get_random_string (length=14)
    }
    return render(request,'project_apps/random_word.html', context)