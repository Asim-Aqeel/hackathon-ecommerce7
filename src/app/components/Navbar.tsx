import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">

      <div className="text-blue-600 font-bold text-4xl">MORENT</div>

      <div className="flex items-center w-full max-w-md mx-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Say something here"
            className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 pl-80">
            🔍
          </div>
        </div>
        <div className="ml-2 p-2 bg-gray-100 rounded-full text-gray-500 cursor-pointer hover:bg-gray-200">
          ⚙️
        </div>
      </div>


      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
            ♥
          </div>
        </div>

        <div className="relative">
          <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
            🔔
          </div>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
          ⚙️
        </div>

        <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
          <Image
            src="/profil.png"
            alt="Profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
