from pymongo import MongoClient
import os

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)
db = client["book_club_db"]   # database name
books_collection = db["books"]  # collection name
