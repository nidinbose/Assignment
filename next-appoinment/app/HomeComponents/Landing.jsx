'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaStethoscope, FaUserMd, FaArrowRight } from 'react-icons/fa';
import { MdEmail, MdHealthAndSafety } from 'react-icons/md';

export default function Landing() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
     <div className="flex-1 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2  font-medium bg-[#031b4e] text-white w-70 rounded-full p-3"
          >
            <MdHealthAndSafety className="text-xl" />
            <span>Solutions for better health</span>
     </motion.div>



          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-5xl font-bold text-[#031b4e] leading-tight"
          >
            Your Wellness, <span className="text-[text-[#00b1d2]]">Our Mission</span>
          </motion.h1>

    <motion.p 
            initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-gray-600 max-w-lg"
         >
            We are dedicated to providing compassionate and professional healthcare services,
            tailored to meet your unique needs, so you can thrive and enjoy a healthier, more
            fulfilling life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              href="/Doctors" 
              className="px-6 py-3 bg-[#031b4e] text-white rounded-full hover:opacity-90 transition duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Book Appointment <FaArrowRight className='animate-pulse'/>
            </Link>
            <Link 
              href="/services" 
              className="px-6 py-3 border border-blue-900 text-blue-900 rounded-full hover:bg-[#031b4e] hover:text-white transition duration-300"
            >
              Our Services
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-10 max-w-xl"
          >
            <div className="bg-[#031b4e] p-4 rounded-xl text-center">
              <Link href="/patients" className="text-2xl font-bold text-white transition">700+</Link>
              <p className="text-sm text-[#00b1d2] mt-1">Patients served</p>
            </div>
            <div className="bg-[#031b4e] p-4 rounded-xl text-center">
              <Link href="/reports" className="text-2xl font-bold text-white  transition">98%</Link>
              <p className="text-sm text-[#00b1d2] mt-1">Reports delivered</p>
            </div>
            <div className="bg-[#031b4e] p-4  rounded-xl text-center">
              <Link href="/doctors" className="text-2xl font-bold text-white transition">150+</Link>
              <p className="text-sm text-[#00b1d2] mt-1">Expert specialists</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex-1 w-full max-w-xl mt-10 lg:mt-0"
        >
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/2a/0e/8c/2a0e8cb609405d9ca87bc81154b9c443.jpg"
              alt="Doctor"
              width={600}
              height={700}
              className="rounded-xl z-10 object-cover w-full h-auto "
              priority
            />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute top-8 left-0 md:left-[-40px] bg-white shadow-lg p-3 rounded-xl text-center w-20 sm:w-24"
            >
              <div className="relative mx-auto">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 animate-spin">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="#e5e7eb"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="#06b6d4"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="175"
                    strokeDashoffset="26"
                    strokeLinecap="round"
                    transform="rotate(-90 32 32)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm sm:text-lg font-bold">
                  85%
                </div>
              </div>
              <p className="text-xs mt-1 text-gray-500">Success rate</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-6 right-0 md:right-[-30px] bg-white shadow-lg p-3 rounded-xl text-xs sm:text-sm max-w-[140px]"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <MdEmail className="text-cyan-600 text-lg" />
                <span>Have a question?</span>
              </div>
              <a 
                href="mailto:info@greenleafhealth.com" 
                className="text-cyan-600 font-medium hover:underline block mt-1"
              >
                Contact Us
              </a>
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 right-8 bg-white p-2 rounded-full shadow-md"
            >
              <FaHeartbeat className="text-red-500 text-xl sm:text-2xl" />
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-12 left-8 bg-white p-2 rounded-full shadow-md"
            >
              <FaUserMd className="text-blue-500 text-xl sm:text-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}