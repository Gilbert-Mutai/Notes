from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes, name='routes'),
    path('notes/',views.getNotes, name='notes'),

    path('notes/<str:pk>/',views.getNote, name='note'),
    path('create-note/',views.createNote, name='create-note'),
    
    path('update-note/<str:pk>/',views.updateNote, name='update-note'),
    path('delete-note/<str:pk>/',views.deleteNote, name='delete-note'),
]
