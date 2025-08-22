import { useState } from "react";
import api from "../services/api";

function Login(){
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
        <div className="Login_page">
            <h2>Welcome back!!!</h2>
            <h2>Login to your account</h2>

            <form onSubmit ={handleSubmit} className="login-form">
                <input
                type="email"
                placeholder="write your email here"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="Login_input"/>

                <input
                type ="password"
                placeholder="secure account well"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="password_input"/>

                <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="Remember_checkbox"
          />
          Remember Me
        </label>
         
         <button type="submit" className="Login_button">
          Login
        </button>

        <button type="submit" className="SignUp_button">
          SignUp
        </button>

        </form>

        </div>
    )
}

export default Login;