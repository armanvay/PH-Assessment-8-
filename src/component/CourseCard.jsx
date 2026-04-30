import React from 'react';
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition w-[260px]">
      {/* Image */}
      <div className="relative h-36 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-md font-semibold leading-tight">{course.title}</h2>

        <p className="text-sm text-gray-500">{course.instructor}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <FaStar />
          <span>{course.rating}</span>
          <span className="text-gray-400">(2.3K)</span>
        </div>

        {/* Button */}
        <button className="w-full border border-indigo-400 text-indigo-500 py-1.5 rounded-md text-sm hover:bg-indigo-50 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;