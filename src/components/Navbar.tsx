"use client";

import Image from 'next/image';
import { IoMdSearch } from 'react-icons/io'; // Import search icon
import { useState } from 'react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Logic to handle search results
    console.log("Searching for:", searchTerm);
    // You can add your search logic here (e.g., redirect to a search page)
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 rounded-2xl">
      {/* Logo */}
      <Image src="/kira.png" alt="Kira Logo" width={80} height={80} />

      {/* Search Bar Container */}
      <div className="flex-grow mx-4 flex items-center justify-center relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-80 pl-10 pr-14 py-2 bg-gray-700 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-900 transition duration-200"
        />
        
        {/* Search Icon Button with overlap */}
        <button 
            onClick={handleSearch}
            className="absolute top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-800 transition duration-200 border-none"
            style={{ right: '550px' }} // Adjust this pixel value as needed
        >
  <IoMdSearch className="text-gray-400 text-lg" />
</button>

      </div>

      {/* Profile Circle with Online Status */}
      <div className="relative w-12 h-12">
        <Image
          src="/profile.jpg" // Replace with your profile image path
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full object-cover w-full h-full"
        />
        <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800 z-10"></span>
      </div>
    </header>
  );
};

export default Navbar;
