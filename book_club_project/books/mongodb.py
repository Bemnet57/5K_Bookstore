#initial setup
from pymongo import MongoClient
import os

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)
db = client["book_club_db"]   # database name
books_collection = db["books"]  # collection name

#added the 2nd time
# books/mongodb.py
from pymongo import MongoClient
from django.conf import settings

# Connect to MongoDB Atlas
client = MongoClient(settings.MONGODB_URI)
db = client[settings.MONGODB_DB_NAME]
books_collection = db["books"]

# ---------- CRUD Helpers ----------

def insert_book(book_data: dict):
    """Insert a new book into MongoDB."""
    result = books_collection.insert_one(book_data)
    return str(result.inserted_id)

def get_all_books():
    """Retrieve all books from MongoDB."""
    return list(books_collection.find({}))

def get_book_by_id(book_id):
    """Retrieve a single book by its _id."""
    from bson import ObjectId
    return books_collection.find_one({"_id": ObjectId(book_id)})

def update_book(book_id, updated_data: dict):
    """Update an existing book."""
    from bson import ObjectId
    result = books_collection.update_one(
        {"_id": ObjectId(book_id)},
        {"$set": updated_data}
    )
    return result.modified_count > 0

def delete_book(book_id):
    """Delete a book by its _id."""
    from bson import ObjectId
    result = books_collection.delete_one({"_id": ObjectId(book_id)})
    return result.deleted_count > 0
