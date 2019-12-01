from django.shortcuts import render, HttpResponse
from django.

def index(request):
    context = {
        "title" = 
    }
    return render(request, 'index.html', context)