import { useState, useEffect } from "react";
import axios from "axios";

export default function MostPopular() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch most popular books from backend API
    axios.get("/api/books?sort=popular") // adjust endpoint
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []); // empty dependency = runs once

  return (
    <div className="container">
      <h2>Most Popular</h2>
      <div className="row g-3">
        {books.map(book => (
          <div key={book.id} className="col-6 col-md-3">
            <div className="card text-center h-100">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <p className="card-text">{book.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
