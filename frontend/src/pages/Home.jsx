import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [weeklyBest, setWeeklyBest] = useState(null);
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("popular"); // popular, newest, available

  // Fetch this week's best book
  useEffect(() => {
    axios.get("/api/books/this_week_best/")
      .then(res => setWeeklyBest(res.data))
      .catch(err => console.error(err));
  }, []);

  // Fetch books based on filter
  useEffect(() => {
    let url = "/api/books/";
    if (filter === "available") url += "?available=true&sort=newest";
    else if (filter === "newest") url += "?sort=newest";
    else url += "?sort=popular";

    axios.get(url)
      .then(res => {
        // Handle DRF pagination / results
        setBooks(res.data.results || res.data);
      })
      .catch(err => console.error(err));
  }, [filter]);

  return (
    <div className="container my-4">

      {/* Hero Section */}
      {weeklyBest && (
        <section className="position-relative mb-5">
          <img
            src={weeklyBest.image}
            alt={weeklyBest.title}
            className="img-fluid w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <div className="position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-50 p-4 rounded">
            <h1 className="display-4">This Week's Best: {weeklyBest.title}</h1>
            <p className="lead">Find your next read</p>
          </div>
        </section>
      )}

      {/* Filter Buttons */}
      <div className="mb-4 text-center">
        <button
          className={`btn me-2 ${filter === "popular" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setFilter("popular")}
        >
          Most Popular
        </button>
        <button
          className={`btn me-2 ${filter === "newest" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setFilter("newest")}
        >
          Newest In
        </button>
        <button
          className={`${filter === "available" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setFilter("available")}
        >
          Available
        </button>
      </div>

      {/* Books Grid */}
      <div className="row g-3">
        {books && books.length > 0 ? (
          books.map(book => (
            <div key={book.id} className="col-6 col-md-3">
              <div className="card h-100 text-center">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text">{book.title}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No books found</p>
        )}
      </div>

    </div>
  );
}
