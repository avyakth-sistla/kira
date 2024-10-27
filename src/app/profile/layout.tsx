import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from '@/components/Navbar';  // Importing Navbar
import Sidebar from '@/components/Sidebar'; // Importing Sidebar

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Profile Page",
  description: "User Profile Information",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <div className="flex-grow p-0"> {/* This will allow the content to fill the remaining space */}
              {children} {/* Profile page content goes here */}
            </div>
      </body>
    </html>
  );
}
