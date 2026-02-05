import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login"


function App() {
  return (
    <>
    <Navbar/>
     <Home className="font-poppins"/>
     <Footer/>
     <h1>This is for testing (Login)</h1>
     <Login/>
    </>
  );
}

export default App;
