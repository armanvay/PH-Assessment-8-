"use client";
import CourseCard from "@/component/CourseCard";
import NoCoursesFound from "@/component/NoCoursesFound";
import { Label, SearchField, Spinner } from "@heroui/react";
import React, { useEffect, useState } from "react";

const CoursesPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://ph-assessment-8.vercel.app/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const filteredCourses = search
    ? data.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase()),
      )
    : data;

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="w-11/12 mx-auto md:flex justify-between items-center mb-10">
        <h1 className="font-bold text-3xl underline">ALL Courses</h1>

        <SearchField name="search">
          <Label>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input
              className="w-65"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchField.ClearButton onClick={() => setSearch("")} />
          </SearchField.Group>
        </SearchField>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <Spinner size="lg" />
        </div>
      ) : filteredCourses.length === 0 ? (
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
