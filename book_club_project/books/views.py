from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from django.db.models import Count
from datetime import timedelta
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

    def get_queryset(self):
        queryset = Book.objects.all()
        # Filter by availability
        available = self.request.query_params.get('available')
        if available == "true":
            queryset = queryset.filter(is_available=True)
        # Sort
        sort = self.request.query_params.get('sort')
        if sort == "newest":
            queryset = queryset.order_by('-created_at')
        elif sort == "popular":
            queryset = queryset.annotate(rental_count=Count('rentalrequest')).order_by('-rental_count')
        return queryset

    @action(detail=False, methods=['get'])
    def this_week_best(self, request):
        """Return the most rented book in the last 7 days"""
        one_week_ago = timezone.now() - timedelta(days=7)
        popular_book = (
            Book.objects.filter(rentalrequest__created_at__gte=one_week_ago)
            .annotate(rent_count=Count('rentalrequest'))
            .order_by('-rent_count')
            .first()
        )
        if popular_book:
            serializer = BookSerializer(popular_book)
            return Response(serializer.data)
        return Response({"detail": "No rentals this week"}, status=404)


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
