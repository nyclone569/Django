from django.urls import path, include

urlpatterns = [
    path('information/', include('information.urls')),
]