from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'author/(?P<author_id>\d+)', views.author),
    url(r'book/(?P<book_id>\d+)', views.displaybook),
]