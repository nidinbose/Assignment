'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Api from '../Api';

export default function AdminPanel() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const domain = Api();
    const res = await axios.get(`${domain}getdoctor`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className=" lg:w-50 xl:w-64 hidden md:flex flex-col bg-white shadow-xl ">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#031b4e]">Admin Panel</h2>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <SidebarItem icon="🏠" label="Dashboard" href="#" />
          <SidebarItem icon="👤" label="Add Doctor" href="/Dashboard/Adddoctor" />
          <SidebarItem icon="⚙️" label="Appoinments" href="/Dashboard/Appoinments" />
          <SidebarItem icon="📊" label="Analytics" href="#" />
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">© 2025 HealthCare</div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className=" text-md md:text-2xl font-bold text-[#031b4e]">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700">Admin</span>
            <div className="w-10 h-10 rounded-full bg-[#031b4e] text-white flex items-center justify-center font-semibold">
              A
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 space-y-10 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[#031b4e]">
            <StatCard title="Total Doctors" value={data.length} icon="🩺" />
            <StatCard title="Active Sessions" value="89" icon="💬" />
            <StatCard title="Monthly Revenue" value="$12,345" icon="💰" />
          </div>
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#031b4e]">Our Doctors</h2>
              <Link href="/Dashboard/Adddoctor" className="text-[#031b4e] hover:underline font-medium">+ Add New</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.map((doctor, index) => (
                <Link key={index} href={`/Dashboard/${doctor._id}`} className="block group">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-69 bg-cover" />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition">
                        Dr. {doctor.name}
                      </h3>
                      <p className="text-sm text-gray-500">{doctor.stream}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, href }) {
  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-teal-100 hover:text-teal-700 transition font-medium"
    >
      <span className="text-lg">{icon}</span>
      <span className="ml-3">{label}</span>
    </Link>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
      <div className="text-4xl">{icon}</div>
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-2xl font-bold text-teal-600">{value}</p>
      </div>
    </div>
  );
}
