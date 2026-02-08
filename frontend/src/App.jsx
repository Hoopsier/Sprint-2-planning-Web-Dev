import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
    <Navbar/>
     <Home/>
     <Footer/>
     <h1>This is for testing (SingUp)</h1>
     {/* <Login/> */}
     <SignUp/>
    </>
  );
}

export default App;
