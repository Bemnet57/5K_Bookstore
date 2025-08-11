from rest_framework import viewsets
from .models import DeliveryOption, Book, RentalRequest, Notification
from .serializers import DeliveryOptionSerializer, BookSerializer, RentalRequestSerializer, NotificationSerializer



class DeliveryOptionViewSet(viewsets.ModelViewSet):
    queryset = DeliveryOption.objects.all()
    serializer_class = DeliveryOptionSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            from .serializers import BookWriteSerializer
            return BookWriteSerializer
        return BookSerializer

class RentalRequestViewSet(viewsets.ModelViewSet):
    queryset = RentalRequest.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            from .serializers import RentalRequestWriteSerializer
            return RentalRequestWriteSerializer
        return RentalRequestSerializer
    

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            from .serializers import NotificationWriteSerializer
            return NotificationWriteSerializer
        return NotificationSerializer