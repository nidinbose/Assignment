'use client';

import { FaPlay } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 py-12 max-w-7xl mx-auto">
      {/* Left: Doctor Image with Play Button */}
      <div className="relative w-full max-w-md">
        <img
          src="/doctor.jpg" // Replace with your actual image path
          alt="Doctor"
          className="rounded-2xl w-full object-cover shadow-lg"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <FaPlay className="text-blue-600 text-xl ml-1" />
          </div>
        </button>
      </div>

      {/* Right: Content */}
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
          About Us
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Personalized, <span className="text-cyan-500">Exceptional</span> Care
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl">
          Providing the Highest Quality of Care and Comfort, Created Especially for Your Health, Safety, and Peace of Mind
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="flex items-start gap-3">
              <div className="bg-cyan-100 p-2 rounded-full">
                <img src="/icons/research.svg" alt="Research" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Research and development</h4>
                <p className="text-sm text-gray-600 mt-1">
                  At Green Leaf Health, our R&D team drives innovation to improve health and well-being through advanced solutions and technology.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-3">
              <div className="bg-cyan-100 p-2 rounded-full">
                <img src="/icons/imaging.svg" alt="Imaging" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Advanced imaging services</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Utilizing cutting-edge imaging technologies to ensure precise diagnosis and effective treatment planning tailored to patient needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <button className="px-6 py-2 bg-blue-900 text-white text-sm font-semibold rounded-full hover:bg-blue-800 transition">
          View all →
        </button>
      </div>
    </div>
  );
}
