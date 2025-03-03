from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Information
from .serializers import InformationSerializer

@api_view(['GET'])
def get_students(request):
    students = Information.objects.all()
    serializer = InformationSerializer(students, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_student(request):
    serializer = InformationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_student(request, student_id):
    student = Information.objects.get(id=student_id)
    serializer = InformationSerializer(student, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_student(request, student_id):
    student = Information.objects.get(id=student_id)
    student.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
