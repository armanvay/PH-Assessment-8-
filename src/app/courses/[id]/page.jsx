import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const CourseDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://ph-assessment-8.vercel.app/data.json");
  const data = await res.json();

  const course = data.find((item) => item.id == id);

  if (!course) {
    return <h1 className="text-center text-2xl mt-10">Course not found</h1>;
  }

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative w-full h-75">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{course.title}</h1>

          <p className="text-gray-500">Instructor: {course.instructor}</p>
          <p className="text-gray-500">Duration: {course.duration}</p>
          <p className="text-gray-500">Level: {course.level}</p>

          <p className="text-yellow-500 font-semibold flex items-center gap-2">
            <FaStar /> {course.rating} Rating
          </p>

          <p className="text-gray-700">{course.description}</p>

          {/* ✅ NEW: Course Curriculum */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-3">Course Curriculum</h2>

            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-green-500" />
                Introduction & Setup
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-green-500" />
                HTML & CSS Basics
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-green-500" />
                JavaScript Fundamentals
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-green-500" />
                React & Components
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-green-500" />
                Project Build & Deployment
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-6">
            <button className="cursor-pointer bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600">
              Enroll Now
            </button>

            <Link href={"/courses"}>
              <button className="cursor-pointer bg-black ml-5 text-white px-6 py-2 rounded-md">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
