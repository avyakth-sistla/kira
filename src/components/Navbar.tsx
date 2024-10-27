"use client";

import Image from 'next/image';
import { IoMdSearch } from 'react-icons/io'; // Import search icon
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input

  const handleSearch = () => {
    if (searchTerm) {
      setRecentSearches((prev) => {
        if (!prev.includes(searchTerm)) {
          return [searchTerm, ...prev].slice(0, 5);
        }
        return prev;
      });
      console.log("Searching for:", searchTerm);
      setSearchTerm('');
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (term: string) => {
    setSearchTerm(term);
    setShowSuggestions(false);
    handleSearch();
  };

  const handleFocus = () => {
    setShowSuggestions(true); // Show suggestions when input is focused
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowSuggestions(false); // Hide suggestions when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside); // Add event listener for clicks
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up on unmount
    };
  }, []);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 rounded-2xl">
      {/* Logo */}
      <Image src="/kira.png" alt="Kira Logo" width={80} height={80} />

      {/* Search Bar Container */}
      <div className="flex-grow mx-4 flex items-center justify-center relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
          }}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus} // Show suggestions on focus
          className="w-80 pl-10 pr-14 py-2 bg-gray-700 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-900 transition duration-200"
        />
        
        {/* Search Icon Button with overlap */}
        <button 
          onClick={handleSearch}
          className="absolute right-40 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-800 transition duration-200 border-none"
          style={{ right: '550px' }}
        >
          <IoMdSearch className="text-gray-400 text-lg" />
        </button>

        {/* Recent Searches Dropdown */}
        {showSuggestions && (
          <div className="absolute z-10 w-80 bg-gray-800 rounded-lg shadow-lg mt-2 top-full center">
            {recentSearches.length > 0 ? (
              recentSearches.map((term, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(term)}
                  className="cursor-pointer p-2 hover:bg-gray-700 transition duration-200"
                >
                  {term}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No recent searches</div>
            )}
          </div>
        )}
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
