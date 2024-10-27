"use client";

import { IoMdHome } from "react-icons/io";
import { IoMdPlay } from "react-icons/io"; // Replace with the icons you want to use
import { IoMdHeart } from "react-icons/io"; // Example for favorites

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-800 rounded-2xl p-6">
      <nav className="flex flex-col space-y-6 mt-10">
        {/* Home */}
        <div className="flex items-center space-x-2 hover:bg-gray-900 p-4 rounded-lg transition duration-200 ease-in-out">
          <IoMdHome className="text-white text-2xl" />
          <a href="#" className="text-white text-lg">Home</a>
        </div>
        
        {/* Playlist */}
        <div className="flex items-center space-x-2 hover:bg-gray-900 p-4 rounded-lg transition duration-200 ease-in-out">
          <IoMdPlay className="text-white text-2xl" />
          <a href="#" className="text-white text-lg">Playlist</a>
        </div>

        {/* Favorites */}
        <div className="flex items-center space-x-2 hover:bg-gray-900 p-4 rounded-lg transition duration-200 ease-in-out">
          <IoMdHeart className="text-white text-2xl" />
          <a href="#" className="text-white text-lg">Favorites</a>
        </div>

        {/* Add more links as needed */}
      </nav>
    </aside>
  );
};

export default Sidebar;
