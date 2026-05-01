import React from "react";
import Link from "next/link";
import Image from "next/image";
import page from "@/acsst/page.png"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 min-h-[60vh] font-sans">
    
      <div className="w-full md:w-1/2 text-left space-y-4">
        <h1 className="text-8xl font-bold text-indigo-600">404</h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 flex items-center gap-2">
          Page Not Found 
        </h2>
        <p className="text-gray-500 text-lg max-w-sm">
          The page youre looking for doesnt exist or has been moved.
        </p>

        <div className="pt-4">
          <Link href="/">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg">
              Go Home
            </button>
          </Link>
        </div>
      </div>

    
      <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
    <Image src={page} width={500} height={500} alt=""></Image>
       
      </div>
    </div>
  );
};

export default NotFoundPage;
