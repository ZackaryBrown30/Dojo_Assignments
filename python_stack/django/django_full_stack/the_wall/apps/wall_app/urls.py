from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    # url(r'^success$', views.success),
    url(r'^logout$', views.logout),
    url(r'^login$', views.login),
    url(r'^wall$', views.wall),
    url(r'^post_message/', views.post_message),
    # url(r'^comment/', views.comment),
    # url(r'post_message/', views.post_message),
]