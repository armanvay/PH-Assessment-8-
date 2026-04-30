
import React from 'react';
import CourseCard from './CourseCard';


const GetCard = async() => {
    const res = await fetch("https://ph-assessment-8.vercel.app/data.json");
    const data =await res.json();
     const final =data.sort((a, b) => b.rating - a.rating).slice(0, 3); // first 3
     console.log(final)
    return (
      <div>
        <h1>Popular Courses</h1>
        {final.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    );
};

export default GetCard;