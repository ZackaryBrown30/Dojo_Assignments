from django.shortcuts import render, redirect
from apps.book_app.models import *

def index(request):
    if request.method =="GET":
        context = {
            "all_books" : Books.objects.all(),
            "all_authors" : Author.objects.all()
        }
        return render(request, "book_app/index.html", context)
    if request.method == "POST":
        title = request.POST["Title"]
        desc = request.POST["Description"]
        auth = Author.objects.get(id = request.POST['x'])
        Books.objects.create(title = title, description = desc, Authors = auth)
        return redirect('/')

def displaybook(request, book_id):
    if request.method =="GET":
        context = {
            "all_books" : Books.objects.get(id = book_id),
            "all_authors" : Author.objects.all()
        }
        return render (request, "book_app/bookview.html", context)
    if request.method == "POST":
        this_book = Books.objects.get(id = book_id)
        this_book.Authors.add(Author.objects.get(id=request.POST['author_id']))
        return redirect ('/book/'+str(book_id))





def author(request, author_id):
    if request.method == "POST":

        return redirect('/author/{{author_id}}')

    if request.method =="GET":
        context = {
            "all_authors" : Author.objects.all(),
            "all_books" : Books.objects.get(id = book_id)
        }
        return render ('/author/{{author_id}}')