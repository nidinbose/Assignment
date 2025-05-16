'use client';

import { CalendarCheck, Smartphone, UserCheck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
       
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg" 
              alt="Doctor app"
              width={500}
              height={500}
              className="rounded-3xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#031b4e] px-4 py-1.5 text-white rounded-full text-xs sm:text-sm mb-4 font-medium shadow">
              About Our App
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031b4e] mb-4 leading-tight">
              Your Health, <span className="text-blue-600">One Click</span> Away
            </h2>

            <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-2xl">
              Our doctor booking platform helps you find trusted healthcare professionals and schedule appointments instantly. Real-time availability, quick confirmation, and strong privacy ensure peace of mind at every step.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FeatureCard
                icon={<CalendarCheck className="text-blue-600 w-6 h-6" />}
                title="Easy Scheduling"
                description="Book appointments with your preferred doctor in just a few taps."
              />
              <FeatureCard
                icon={<Smartphone className="text-green-500 w-6 h-6" />}
                title="Mobile Friendly"
                description="Access our platform anytime, anywhere, on any device."
              />
              <FeatureCard
                icon={<UserCheck className="text-purple-500 w-6 h-6" />}
                title="Verified Doctors"
                description="Choose from a network of licensed and experienced professionals."
              />
              <FeatureCard
                icon={<ShieldCheck className="text-red-500 w-6 h-6" />}
                title="Secure & Private"
                description="Your health data is encrypted and always kept confidential."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex items-start gap-4 p-5 bg-white rounded-xl border border-blue-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full shadow-md">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-base text-[#031b4e] mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
