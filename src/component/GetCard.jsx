
import React from 'react';
import CourseCard from './CourseCard';
import Link from 'next/link';


const GetCard = async() => {
    const res = await fetch("https://ph-assessment-8.vercel.app/data.json");
    const data =await res.json();
     const final =data.sort((a, b) => b.rating - a.rating).slice(0, 3); // first 3
     console.log(final)
    return (
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex max-w-6xl mx-auto justify-between items-center mb-8">
          <div></div>
          <h1 className="font-bold text-3xl text-center ml-15 ">
            Popular Courses
          </h1>
          <Link href={"/courses"}>
            <p className="font-bold cursor-pointer text-blue-500 hover:underline">
              View All
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {final.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
};

export default GetCard;