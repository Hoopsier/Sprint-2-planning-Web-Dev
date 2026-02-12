import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login"
import RestaurantView from "./pages/RestaurantView";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RestaurantRegister from "./pages/RestaurantRegister";


function App() {
  return (
    <>
 restaurantView_viewcard
      <Navbar/>
      <Home className="font-poppins"/>
      <Footer/>
      <h1>This is for testing (Login)</h1>
      <Login/>
      <h1>This is for testing (RestaurantView)</h1>
      <RestaurantView/>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurant-register" element={<RestaurantRegister />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
