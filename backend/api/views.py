from django.shortcuts import render
from .models import Todo
from .serializers import TodoSerializer
from rest_framework import generics

# Create your views here.

class TodoListCreateView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_queryset(self):
        return Todo.objects.all().order_by('-created_at')

class TodoDetailUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

 
class TodoDeleteView(generics.DestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    