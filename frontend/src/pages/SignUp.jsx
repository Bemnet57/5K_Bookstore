import { useState } from "react";
import api from "../services/api";

function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [rememberMe, setRememberMe] = useState(false); 
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("auth/register/", { username, email, password });
      console.log("SignUp success:", response.data);
      // Redirect to login or save token
    } catch (err) {
      setError("Failed to register");
    }
  };


    return (
        <div className="SignUp_page">
            <h2>Welcome!</h2>
            <h2>Create a new account</h2>

            <form onSubmit ={handleSubmit} className="SignUp-form">
                <input
                type="email"
                placeholder="write your email here"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="SignUp_email"/>

                 <input
                type="name"
                placeholder="write your full name here"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                required
                className="Name"/>

                <input
                type ="password"
                placeholder="secure account well"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="SignUp_password_input"/>

                <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="the_eye">
            {showPassword ? "Hide" : "Show"}
          </button>

                <label className="remember_checkbox">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="Remember_checkbox"
          />
          Remember Me
        </label>
    

        <button type="submit" className="SignUp_button">
          SignUp
        </button>

        <button type="submit" className="Login_button">
          Login
        </button>

        </form>

        </div>
    )
}


export default SignUp;