"use client"; // Ensure this is a client component

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const ProfilePage = () => {
  const [profilePic, setProfilePic] = useState('/default-profile.png'); // Set initial state

  useEffect(() => {
    const savedImage = localStorage.getItem('profilePic');
    if (savedImage) setProfilePic(savedImage);
  }, []); // Only run once after mount

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setProfilePic(imageData);
        localStorage.setItem('profilePic', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex p-4">
      <Sidebar /> {/* Sidebar on the left */}
      <div className="flex-1 flex flex-col bg-gray-800 rounded-2xl ml-4">
        <Navbar /> {/* Navbar at the top */}
        <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-2xl mt-10 mx-auto max-w-md shadow-lg">
          <h1 className="text-3xl mb-6 font-semibold">My Profile</h1>
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={profilePic}
              alt="Profile Picture"
              layout="fill"
              className="rounded-full object-cover border-4 border-gray-700"
              priority // Prioritize loading this image
            />
          </div>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            className="mt-4 p-2 bg-gray-700 rounded-lg text-white cursor-pointer hover:bg-gray-600 transition duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
