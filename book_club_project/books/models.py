from django.db import models
from users.models import User
from .mongodb import books_collection


class DeliveryOption(models.Model):
    option_name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.option_name


# Book is no longer a Django model — it lives in MongoDB.
# We'll create a helper class instead:
class Book:
    """
    A wrapper class for MongoDB Book documents.
    """
    def __init__(self, data):
        self.id = str(data.get("_id"))
        self.title = data.get("title")
        self.author = data.get("author")
        self.keywords = data.get("keywords", "")
        self.summary = data.get("summary", "")
        self.cover_image = data.get("cover_image", None)
        self.posted_by_id = data.get("posted_by_id")
        self.amount_in_store = data.get("amount_in_store", 0)

    @staticmethod
    def create(data: dict):
        """Insert a new book into MongoDB."""
        result = books_collection.insert_one(data)
        return str(result.inserted_id)

    @staticmethod
    def get(book_id):
        """Fetch a single book by ID."""
        data = books_collection.find_one({"_id": book_id})
        return Book(data) if data else None

    @staticmethod
    def all():
        """Fetch all books."""
        return [Book(doc) for doc in books_collection.find()]

    @staticmethod
    def update(book_id, updates: dict):
        """Update a book document."""
        books_collection.update_one({"_id": book_id}, {"$set": updates})

    @staticmethod
    def delete(book_id):
        """Delete a book."""
        books_collection.delete_one({"_id": book_id})


class RentalRequest(models.Model):
    requested_by = models.ForeignKey(User, on_delete=models.CASCADE)
    requested_book_id = models.CharField(max_length=255)  # MongoDB ObjectId as string
    requested_at = models.DateTimeField(auto_now_add=True)
    delivery_option = models.ForeignKey(DeliveryOption, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.requested_by} requested {self.requested_book_id}"


class Notification(models.Model):
    receiver = models.ForeignKey(User, on_delete=models.CASCADE)
    sent_at = models.DateTimeField(auto_now_add=True)
    message = models.TextField()

    def __str__(self):
        return f"To {self.receiver} at {self.sent_at}"


# from django.db import models
# from users.models import User
# from .mongodb import books_collection

# class DeliveryOption(models.Model):
#     option_name = models.CharField(max_length=100, unique=True)

# class Book(models.Model):
#     title = models.CharField(max_length=100)
#     author = models.CharField(max_length=40)
#     keywords = models.TextField()
#     summary = models.CharField(max_length=250)
#     cover_image = models.ImageField(upload_to='book_covers/')
#     posted_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
#     amount_in_store = models.PositiveIntegerField()

# class RentalRequest(models.Model):
#     requested_by = models.ForeignKey(User, on_delete=models.CASCADE)
#     requested_book = models.ForeignKey(Book, on_delete=models.CASCADE)
#     requested_at = models.DateTimeField(auto_now_add=True)
#     delivery_option = models.ForeignKey(DeliveryOption, on_delete=models.SET_NULL, null=True)

# class Notification(models.Model):
#     receiver = models.ForeignKey(User, on_delete=models.CASCADE)
#     sent_at = models.DateTimeField(auto_now_add=True)
#     message = models.TextField()



# # Example: Insert book
# books_collection.insert_one({
#     "title": "Atomic Habits",
#     "author": "James Clear",
#     "available": True
# })

# # Example: Find books
# for book in books_collection.find():
#     print(book)
