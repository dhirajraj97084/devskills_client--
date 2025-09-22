import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">DevSkills</h2>
            <p className="text-gray-400 text-sm mt-1">
              Learn. Build. Grow. 🚀
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm font-medium">
            <a href="/about" className="hover:text-white transition">
              About
            </a>
            <a href="/courses" className="hover:text-white transition">
              Courses
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} DevSkills. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
