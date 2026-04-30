import CourseCard from '@/component/CourseCard';
import React from 'react';

const CoursesPage = async() => {
     const res = await fetch("https://ph-assessment-8.vercel.app/data.json");
    const data =await res.json();
    return (
      <div className="w-11/12 mx-auto py-10">
        <h1 className="font-bold text-3xl text-center underline mb-8">ALL Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {data.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
};

export default CoursesPage;