from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^post$', views.post),
    url(r'^show/(?P<show_id>\d+)$', views.show),
    url(r'^delete/(?P<show_id>\d+)$', views.delete),
    url(r'^update/(?P<show_id>\d+)$', views.update_view),
    url(r'^update_action/(?P<show_id>\d+)$', views.update),
    url(r'^all_shows$', views.all_shows),
]
