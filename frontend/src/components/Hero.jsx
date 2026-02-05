import Image from '../assets/homeimg/pizza.jpg';
import Image1 from '../assets/homeimg/burger.jpg';
import Image2 from '../assets/homeimg/healthy.png';
import Image3 from '../assets/homeimg/greenkitchen.jpg';
import heroImg from "../assets/homeimg/hero.png";
import { useEffect, useState } from "react";
export default function Hero() {
  const [imageVisible, setImageVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setImageVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);
  const restaurants = [
    { id: 1, name: "Pizza Palace", type: "Pizza, Italian", rating: 4.5, time: "25–35 min", price: "€2.99", image: Image},
    { id: 2, name: "Burger Corner", type: "Burger, Fast Food", rating: 4.3, time: "20–30 min", price: "€1.99", image: Image1 },
    { id: 3, name: "Healthy Bowl", type: "Healthy, Vegan", rating: 4.7, time: "30–40 min", price: "€3.49", image: Image2 },
    { id: 4, name: "Green Kitchen", type: "Salad, Healthy", rating: 4.6, time: "25–35 min", price: "€2.49", image: Image3 },
  ];
//typewriter component
  const Typewriter = ({ text, speed = 50 }) => {
    const [value, setValue] = useState("");
    useEffect(() => {
      let index = 0;
      const timer = setInterval(() => {
        setValue(text.slice(0, index + 1));
        index++;
        if (index === text.length) clearInterval(timer);
      }, speed);
      return () => clearInterval(timer);
    }, [text, speed]);
    return <span>{value}</span>;
  };


  return (
    <div>
      {/* Page Title */}
        <h2 className="font-semibold">Home</h2>
      
      {/* Hero Section */}
      <div className="px-4 relative">
        <div className="h-60 bg-linear-to-r from-green-100 to-green-800 rounded-lg flex flex-col justify-center px-10">
          <h2 className="text-5xl font-bold text-green-900">
          <Typewriter
              text=" Eat Fresh.Feel Better." speed={30}/>
            </h2>
            <p className="text-2xl text-green-700 mt-1">
          <Typewriter
          text="Healthy meals delivered to your door 🏡"
          speed={40}
      />          
      </p>
        </div>
        <div className={`absolute left-350 top-3 w-50 h-50 rounded-full bg-cover bg-center
              shadow-[0_10px_25px_rgba(0,0,0,0.25),0_25px_60px_rgba(0,0,0,0.35)]
              transition-transform duration-300 hover:scale-105
              ${imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          style={{ 
          backgroundImage: `url(${heroImg})`,}}
        >
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 px-4 py-3">
        {["Feature", "Rating", "Delivery Time", "Price"].map((item) => (
          <button
            key={item}
            className="text-xs px-3 py-1 border rounded-full bg-gray-150  cursor-pointer transition-colors duration-200 hover:bg-violet-100 hover:border-gray-600"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-2 gap-5 px-6 pb-14">
        {restaurants.map((r) => (
          <div key={r.id} 
          className="border rounded-md overflow-hidden">
          <div className="h-90 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
          <img src={r.image} alt={r.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
            </div>
            <div className="p-2">
              <h3 className="text-sm font-semibold truncate">{r.name}</h3>
              <p className="text-xs text-black-500 truncate">{r.type}</p>
              <p className="text-xs mt-1">
                ⭐ {r.rating} • {r.time} • {r.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t py-2 text-center text-xs bg-gray-50">
        About Us
      </footer>
    </div>
  );
}
