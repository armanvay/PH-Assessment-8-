import { FaStar } from "react-icons/fa";
import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "Ahashan Habib Utsho",
    role: "Instructors",
    rating: 4.9,
    students: "2.1K",
    img: "https://i.ibb.co.com/W8dCVk8/487932041-1445536463093170-7594996000159429827-n.jpg",
  },
  {
    id: 2,
    name: "Abu Nayim Faisal",
    role: "Moderator",
    rating: 4.8,
    students: "2.1K",
    img: "https://i.ibb.co.com/5dh2Y6m/470194855-2034815466940635-1343360215067022956-n.jpg",
  },
  {
    id: 3,
    name: "Talha Tarique",
    role: "Moderator",
    rating: 4.9,
    students: "1.8K",
    img: "https://i.ibb.co.com/Q3ck4yNL/564022097-4148114172171505-3810016923684499438-n.jpg",
  },
  {
    id: 4,
    name: "Saraban Tahura",
    role: "Instructors",
    rating: 4.8,
    students: "1.5K",
    img: "https://i.ibb.co.com/pjVYJfKj/625001812-1602430944430219-7817922886825245988-n.jpg",
  },
];

const TopInstructors = () => {
  return (
    <section className="max-w-7xl mx-auto px-10 mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Top Instructors</h2>
        <button className="text-sm text-blue-600 hover:underline">
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {instructors.map((item) => (
          <div
            key={item.id}
            className="bg-blue-100 cursor-pointer border-2 border-blue-300 shadow-md rounded-xl p-5 text-center hover:shadow-lg transition"
          >
            {/* Avatar */}
            <div className="flex justify-center mb-3">
              <Image
                src={item.img}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>

            {/* Name */}
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.role}</p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
              <FaStar />
              <span className="text-sm font-medium text-gray-700">
                {item.rating} ({item.students})
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;
