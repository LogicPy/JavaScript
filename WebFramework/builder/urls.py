# builder/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('export/', views.export_html, name='export_html'),
    path('export2/', views.export_html, name='export_html2'),
]
