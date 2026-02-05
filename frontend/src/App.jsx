import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Navbar/>
     <Home className="font-poppins"/>
     <Footer/>
    </>
  );
}

export default App;
