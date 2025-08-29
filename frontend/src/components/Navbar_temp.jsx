import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-bs-theme", newTheme); // Bootstrap 5.3 color modes
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log("Searching for:", query); 
    // later → navigate(`/books?search=${query}`);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo */}
        <a 
          className="navbar-brand fw-bold" 
          href="/home" 
          onClick={(e) => { e.preventDefault(); navigate("/home"); }}
        >
          📚 MyBookApp
        </a>

        {/* Toggler for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links + Search + Profile */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/home")}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/books")}>Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/delivery")}>Delivery</a>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex me-3" role="search" onSubmit={handleSearch}>
            <input 
              className="form-control me-2" 
              type="search" 
              name="search"
              placeholder="Search books..." 
              aria-label="Search" 
            />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>

          {/* Theme toggle */}
          <button className="btn btn-outline-secondary me-3" onClick={toggleTheme}>
            {theme === "light" ? "🌞" : "🌙"}
          </button>

          {/* Profile */}
          <a className="btn btn-primary" onClick={() => navigate("/profile")}>
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
