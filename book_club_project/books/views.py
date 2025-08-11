from rest_framework import viewsets
from .models import DeliveryOption, Book, RentalRequest, Notification
from .serializers import DeliveryOptionSerializer, BookSerializer, RentalRequestSerializer, NotificationSerializer



class DeliveryOptionViewSet(viewsets.ModelViewSet):
    queryset = DeliveryOption.objects.all()
    serializer_class = DeliveryOptionSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class RentalRequestViewSet(viewsets.ModelViewSet):
    queryset = RentalRequest.objects.all()
    serializer_class = RentalRequestSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer