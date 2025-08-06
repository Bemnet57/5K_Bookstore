from django.db import models
from users.models import User

class DeliveryOption(models.Model):
    option_name = models.CharField(max_length=100, unique=True)

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=40)
    keywords = models.TextField()
    summary = models.CharField(max_length=250)
    cover_image = models.ImageField(upload_to='book_covers/')
    posted_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    amount_in_store = models.PositiveIntegerField()

class RentalRequest(models.Model):
    requested_by = models.ForeignKey(User, on_delete=models.CASCADE)
    requested_book = models.ForeignKey(Book, on_delete=models.CASCADE)
    requested_at = models.DateTimeField(auto_now_add=True)
    delivery_option = models.ForeignKey(DeliveryOption, on_delete=models.SET_NULL, null=True)

class Notification(models.Model):
    receiver = models.ForeignKey(User, on_delete=models.CASCADE)
    sent_at = models.DateTimeField(auto_now_add=True)
    message = models.TextField()

