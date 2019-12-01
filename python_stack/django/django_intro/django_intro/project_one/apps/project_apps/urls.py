from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^new$', views.new),
    url(r'^show/(?P<num>\d+)$', views.show),
    url(r'^(?P<num>\d+)/edit$', views.edit),
    url(r'^(?P<num>\d+)/delete$', views.delete),
]
# app level