import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="">
      {/* Full Section with Background Image */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 py-20 text-center flex justify-center items-center min-h-[74vh]">
            <div className="md:w-full  ">
              <span className="font-semibold px-4 py-2 rounded-lg bg-black/80 ">
                Learn coding the right way
              </span>
              <h1 className="text-4xl md:text-5xl font-bold my-4">
                Welcome to DevSkills
              </h1>
              <p className="mb-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Confused about which course to take? We've got you covered!
                Browse courses and discover the best option for you. It's free!
                DevSkills is my effort to teach the basics and those coding
                techniques in a short time that took me years to master.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/courses"
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  Explore Courses
                </Link>
                <a
                  href="https://www.youtube.com/@YourChannelName"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold"
                >
                  <FaYoutube className="mr-2 text-2xl" />
                  Subscribe
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-10">
            <div className="max-w-5xl mx-auto px-4 flex justify-center items-center gap-8 text-center flex-wrap">
              <div>
                <h3 className="text-2xl font-bold">100+</h3>
                <p className="text-sm">Courses</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">500K+</h3>
                <p className="text-sm">Students</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">5.0</h3>
                <p className="text-sm">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
