import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-bs-theme", newTheme);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log("Searching for:", query);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" onClick={() => navigate("/home")}>
          <img src='./logo.png' alt="Logo" height="40" className="d-inline-block align-top"/>
        </a>

        {/* Mobile toggler */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links + Search + Icons */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/books")}>Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/delivery")}>Delivery</a>
            </li>
          </ul>

          {/* Search input group */}
          <form className="d-flex me-3" role="search" onSubmit={handleSearch}>
            <div className="input-group">
              <input 
                type="search"
                name="search"
                className="form-control"
                placeholder="Search books..."
                aria-label="Search"
              />
              <span 
                className="input-group-text search-icon"
                onClick={handleSearch}
              >
                <i className="bi bi-search"></i>
              </span>
            </div>
          </form>

          {/* Theme toggle */}
          <button className="btn btn-outline-secondary me-3" onClick={toggleTheme}>
            {theme === "light" ? <i className="bi bi-moon"></i> : <i className="bi bi-sun"></i>}
          </button>

          {/* Profile icon */}
          <button 
            className="btn profile-btn" 
            onClick={() => navigate("/profile")}
          >
            <i className="bi bi-person-fill"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
