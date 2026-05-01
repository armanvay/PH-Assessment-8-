import { FaCalendarAlt, FaCheckCircle, FaCode, FaCoffee } from "react-icons/fa";

const tips = [
  {
    id: 1,
    title: "Set a Schedule",
    desc: "Make a daily study plan and stick to it.",
    icon: <FaCalendarAlt />,
  },
  {
    id: 2,
    title: "Stay Consistent",
    desc: "Consistency is the key to success.",
    icon: <FaCheckCircle />,
  },
  {
    id: 3,
    title: "Practice Projects",
    desc: "Build projects to strengthen skills.",
    icon: <FaCode />,
  },
  {
    id: 4,
    title: "Take Breaks",
    desc: "Take short breaks to stay productive.",
    icon: <FaCoffee />,
  },
];

const LearningTips = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 mb-10 ">
      <h2 className="animate__animated animate__slideInDown animate__infinite text-2xl font-bold mb-6 text-center">
        Learning Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {tips.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-xl shadow-md bg-blue-100 cursor-pointer hover:border-blue-500 hover:border hover:shadow-xl transition"
          >
            <div className="text-3xl text-purple-600 mb-3">{item.icon}</div>

            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningTips;
