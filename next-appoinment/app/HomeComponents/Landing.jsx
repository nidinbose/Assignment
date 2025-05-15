'use client'

import Image from 'next/image';
import Link from 'next/link';
export default function Landing() {
  return (
    <div className="bg-[#f0f8ff] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1">
          <p className="text-blue-600 font-medium mb-2">● Solutions for better health</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Wellness, <span className="text-cyan-600">Our Mission</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-md">
            We are dedicated to providing compassionate and professional healthcare services,
            tailored to meet your unique needs, so you can thrive and enjoy a healthier, more
            fulfilling life.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Learn More
          </button>

          {/* Stats */}
          <div className="flex gap-6 mt-10 flex-wrap">
            <div>
              <Link href={`/Dashboard`}><p className="text-2xl font-bold text-blue-900">700+</p></Link>
              <p className="text-sm text-gray-500">Patients served</p>
            </div>
            <div>
            <Link href={`/Doctors`}>   hello  </Link>
              <p className="text-sm text-gray-500">Reports delivered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">150+</p>
              <p className="text-sm text-gray-500">Expert specialist</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Doctor Image */}
          <Image
            src="/doctor.png" // ← replace this with your actual image path in public folder
            alt="Doctor"
            width={400}
            height={500}
            className="rounded-xl z-10"
          />

          {/* Diagnosis Circular Graph */}
          <div className="absolute top-8 left-0 md:left-[-60px] bg-white shadow-lg p-4 rounded-xl text-center w-24">
            <div className="relative">
              <svg className="w-16 h-16">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#e5e7eb"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#06b6d4"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="175"
                  strokeDashoffset="26"
                  strokeLinecap="round"
                  transform="rotate(-90 32 32)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                85%
              </div>
            </div>
            <p className="text-xs mt-2 text-gray-500">Successful diagnosis</p>
          </div>

          {/* Contact Info */}
          <div className="absolute bottom-6 right-0 md:right-[-40px] bg-white shadow-lg p-4 rounded-xl text-sm">
            <p className="text-gray-600">Have a question?</p>
            <a href="mailto:info@greenleafhealth.com" className="text-cyan-600 font-medium">
              info@greenleafhealth.com
            </a>
          </div>

          {/* Icons */}
          <Image
            src="/heart-icon.png" // ← add an image in public folder
            alt="Heart"
            width={40}
            height={40}
            className="absolute top-4 right-10"
          />
          <Image
            src="/nurse-icon.png" // ← add an image in public folder
            alt="Nurse"
            width={40}
            height={40}
            className="absolute bottom-4 left-10"
          />
        </div>
      </div>
    </div>
  );
}
