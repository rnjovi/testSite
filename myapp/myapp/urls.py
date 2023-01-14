from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('scraped-data/', views.scrape_data, name='scraped-data'),
]