from django.urls import path
from .views import get_students, add_student, update_student, delete_student

urlpatterns = [
    path('students/', get_students, name='get_students'),
    path('students/add/', add_student, name='add_student'),
    path('students/update/<int:student_id>/', update_student, name='update_student'),
    path('students/delete/<int:student_id>/', delete_student, name='delete_student'),
]
