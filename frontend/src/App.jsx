import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp";
import RestaurantRegister from "./pages/RestaurantRegister";


function App() {
  return (
    <>
    <Navbar/>
     <Home/>
     <Footer/>
     <h1>This is for testing (RestaurantRegister)</h1>
     {/* <Login/> */}
     {/* <SignUp/> */}
     <RestaurantRegister/>
    </>
  );
}

export default App;
