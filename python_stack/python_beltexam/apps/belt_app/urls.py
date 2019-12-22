from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^logout$', views.logout),
    url(r'^login$', views.login),
    url(r'^dashboard$', views.dashboard),
    url(r'^trips/new$', views.new_trip),
    url(r'^trips$', views.trip),
    url(r'^trips/(?P<trip_id>\d+)$', views.view),
    url(r'^delete/(?P<trip_id>\d+)$', views.delete),
    url(r'^update/(?P<trip_id>\d+)$', views.update_view),
    url(r'^update_action/(?P<trip_id>\d+)$', views.update),
    # url(r'^portal', views.portal),
    ]