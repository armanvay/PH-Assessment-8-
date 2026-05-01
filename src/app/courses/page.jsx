"use client";
import CourseCard from "@/component/CourseCard";
import NoCoursesFound from "@/component/NoCoursesFound";
import { Label, SearchField } from "@heroui/react";
import React, { useEffect, useState } from "react";

const CoursesPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  //  const res = await fetch("https://ph-assessment-8.vercel.app/data.json");
  // const data =await res.json();
  useEffect(() => {
    fetch("https://ph-assessment-8.vercel.app/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  const filteredCourses = search
    ? data.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase()),
      )
    : data;
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className=" w-11/12 mx-auto md:flex justify-between items-center mb-10">
        <h1 className="font-bold text-3xl  underline">ALL Courses</h1>
        <div>
          <SearchField name="search">
            <Label>Search</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                className="w-[280px]"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <SearchField.ClearButton onClick={() => setSearch("")} />
            </SearchField.Group>
          </SearchField>
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <NoCoursesFound />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
