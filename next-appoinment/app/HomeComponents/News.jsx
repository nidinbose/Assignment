"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const blogs = [
  {
    category: "Exercise & Fitness",
    title: "The skincare routine that works: expert tips.",
    excerpt: "Discover expert-approved skincare tips that integrate with your fitness routine to keep your skin glowing and healthy.",
    date: "July 18, 2024",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    category: "Mental Health",
    title: "The art of managing business and patients.",
    excerpt: "Balancing mental wellness while managing a healthcare business can be tricky. Here's how successful leaders do it.",
    date: "Aug 26, 2024",
    image: "https://healthcare-in-europe.com/media/story_section_image/9637/image-01-adobestock-218394966.jpg",
  },
  {
    category: "Children's Health",
    title: "Successful transitional rehab: more than just exercise",
    excerpt: "Learn how transitional rehabilitation for children combines play, therapy, and movement to ensure holistic recovery.",
    date: "Sep 5, 2024",
    image: "https://wallpaper.dog/large/20499799.jpg",
  },
  {
    category: "Nutrition",
    title: "Gut health revolution: foods that heal your microbiome",
    excerpt: "Explore the latest research on gut-friendly foods that can boost immunity and improve overall wellness.",
    date: "Oct 12, 2024",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    category: "Senior Health",
    title: "Maintaining mobility: exercises for aging gracefully",
    excerpt: "Safe and effective movement strategies to help seniors maintain independence and quality of life.",
    date: "Nov 3, 2024",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },

  {
    category: "Women's Health",
    title: "Hormone balance through every life stage",
    excerpt: "Understanding hormonal changes from puberty to menopause and natural ways to maintain equilibrium.",
    date: "Jan 15, 2025",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },

];

export default function RecentBlogs() {
  return (
    <section className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              ● Our latest news
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Check out our most recent <br className="hidden sm:block" /> health blogs.
            </motion.h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Stay informed with the latest updates on wellness, fitness, mental health, and more.
              Our experts bring you insights that help you and your family live healthier lives.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#00174f] text-white px-5 py-3 rounded-full text-sm hover:bg-[#002d89] transition-all hover:gap-3 hover:shadow-md"
          >
            View all Posts <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden relative bg-white border border-gray-100 shadow-sm transition-all hover:bg-[#00174f] hover:shadow-lg cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold mb-4 group-hover:bg-white group-hover:text-[#00174f] transition">
                  ● {blog.category}
                </span>

                <h4 className="text-lg font-semibold leading-tight text-gray-800 group-hover:text-white transition mb-3 line-clamp-2">
                  {blog.title}
                </h4>

              

                <div className="mt-auto flex justify-between items-center">
                  <p className="text-xs sm:text-sm text-gray-500 group-hover:text-white transition">
                    {blog.date}
                  </p>
                  <div className="bg-cyan-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#00174f] group-hover:bg-white group-hover:text-[#00174f] transition">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}