import React from "react";
import tutorialsData from "../../data/tutorialsData";
import Layout from "../../components/layout/Layout";

function Tutorials() {
  return (
    <Layout>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 bg-gray-800">
        {tutorialsData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>
              <div className="flex justify-between items-center mt-4 text-sm">
                <span className="text-gray-300">{item.duration}</span>
                <span className="text-blue-400 font-medium">{item.level}</span>
              </div>
              <div className="mt-4 text-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Watch Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Tutorials;
