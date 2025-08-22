import { useState } from "react";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("auth/login/", { email, password });
      console.log("Login success:", response.data);

      // Handle remember me
      if (rememberMe) {
        localStorage.setItem("token", response.data.token); // store token long-term
      } else {
        sessionStorage.setItem("token", response.data.token); // only for this session
      }

      // Redirect user or update state
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="card-title text-center mb-3">Welcome Back!</h2>
        <p className="text-center text-muted mb-4">Login to your account</p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Write your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Secure account well"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
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
              Login
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
