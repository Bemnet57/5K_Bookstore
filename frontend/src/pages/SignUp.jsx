import { useState } from "react";
import api from "../services/api";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("auth/register/", { username: name, email, password });
      console.log("SignUp success:", response.data);
      // Redirect to login or save token
    } catch (err) {
      setError("Failed to register");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="card-title text-center mb-3">Welcome!</h2>
        <p className="text-center text-muted mb-4">Create a new account</p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              placeholder="Write your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Write your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3 position-relative">
            <label className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Secure account well"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-sm btn-outline-secondary position-absolute top-50 end-0 translate-middle-y me-2"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
