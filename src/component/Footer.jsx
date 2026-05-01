import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white mt-10">
    
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700">
      
        <div>
          <h2 className="text-xl font-bold">SkillSphere</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Your journey to the best online learning experience.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400 text-sm">support:armanvay962@gmail.com</p>
          <p className="text-gray-400 text-sm">+880 1845 7959 63</p>
          <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-xl">
            <Link href="#">
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            </Link>
            <Link href="#">
              <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            </Link>
            <Link href="#">
              <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
            </Link>
            <Link href="#">
              <FaGithub className="hover:text-gray-300 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2026 SkillSphere. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="#" className="hover:text-white">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
