import { FaSearch } from "react-icons/fa";

const NoCoursesFound = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-16 text-center">
        <div className="bg-gray-100 p-6 rounded-full mb-4 shadow">
          <FaSearch className="text-4xl text-gray-500" />
        </div>

        <h2 className="text-2xl font-semibold mb-2">No Courses Found</h2>

        <p className="text-gray-500 mb-4">
          Try searching with a different keyword.
        </p>
      </div>
    );
};

export default NoCoursesFound;