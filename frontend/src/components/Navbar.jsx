import React from "react";
import YoumDropLogo from '../assets/YumDropLogo.svg';

import { MapPinIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
   <nav className="bg-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 py-3">
    <div className="flex items-center justify-between">

      <img
        src={YoumDropLogo}
        alt="YumDrop Logo"
        className="h-10 md:h-12 w-auto"
      />

      <div className="hidden md:flex items-center gap-2 border border-gray-300 rounded px-3 py-2 hover:text-blue-500 cursor-pointer">
        <MapPinIcon className="w-5 h-5" />
        <span className="text-sm md:text-base">Delivery address</span>
      </div>

      <div className="flex items-center gap-3 md:gap-6">

        <button className="flex items-center gap-1 hover:text-blue-500">
          <UserIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden md:inline text-sm md:text-base">
            Account
          </span>
        </button>

        <button className="flex items-center gap-1 hover:text-blue-500">
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="text-sm md:text-base">Cart</span>
        </button>

      </div>
    </div>

    <div className="mt-3 md:hidden">
      <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 hover:text-blue-500 cursor-pointer">
        <MapPinIcon className="w-5 h-5" />
        <span className="text-sm">Delivery address</span>
      </div>
    </div>

  </div>
</nav>
  );
}

export default Navbar;
