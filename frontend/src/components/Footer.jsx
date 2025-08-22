import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function Footer() {
  return (
    <footer className="user_footer">
      <p>© 2025 5k Gibi Gubae Book Store. All rights reserved.</p>
      
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">Profile</Link>
        <Link to="/">Cart</Link>
        <Link to="/">Delivery History</Link>
      </div>

      <p>
        Contact us: <a href="mailto:5kgibigubae@gmail.com">5kgibigubae@gmail.com</a>
      </p>

      <p>
        Follow us on social media:{" "}
        <a href="https://www.facebook.com/5kgibigubae" target="_blank" rel="noopener noreferrer">Facebook</a>,{" "}
        <a href="https://www.instagram.com/5kgibigubae" target="_blank" rel="noopener noreferrer">Instagram</a>,{" "}
        <a href="https://www.twitter.com/5kgibigubae" target="_blank" rel="noopener noreferrer">Twitter</a>
      </p>
    </footer>
  );
}

export default Footer;
