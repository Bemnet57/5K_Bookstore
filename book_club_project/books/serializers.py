from rest_framework import serializers
from .models import DeliveryOption, Book, RentalRequest, Notification
from users.serializers import UserSerializer



class DeliveryOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryOption
        fields = ['id', 'option_number']

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        posted_by = UserSerializer(read_only=True)
        fields = [ 
            'id',
            'title',
            'author',
            'keywords',
            'summary',
            'cover_image',
            'posted_by',
            'amount_in_store',
            ]

class RentalRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentalRequest
        requested_by = UserSerializer(read_only=True)
        requested_book = BookSerializer(read_only=True)
        delivery_option = DeliveryOptionSerializer(read_only=True)

        fields = [
            'id',
            'requested_by',
            'requested_book',
            'requested_at',
            'delivery_option',
            ]
        read_only_fields = ['requested_at']

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        receiver = UserSerializer(read_only=True)
        fields = ['id', 'receiver', 'sent_at', 'message']
        read_only_fields = ['sent_at']