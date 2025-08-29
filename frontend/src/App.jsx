import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar_temp";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
// import Home from "./pages/Home";
import './App.css';
import BookOrderPage from "./pages/BookOrderPage";
import './styles/navbar.css';


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* <Home/> */}
        <SignUp/>
        <Login/>
        <main className="flex-grow flex items-center justify-center">
          <h1 className="text-3xl font-bold">Hello React + Django </h1>
        </main>
        <BookOrderPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
