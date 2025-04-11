from django.urls import path
from .views import TodoListCreateView, TodoDeleteView, TodoDetailUpdateView

urlpatterns = [
    path('todos/', TodoListCreateView.as_view(), name='todo-list-create'),
    path('todos/<int:pk>/', TodoDetailUpdateView.as_view(), name='todo-detail-update'),
    path('todos/delete/<int:pk>/', TodoDeleteView.as_view(), name='todo-delete'),
]