'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Api from '../Api';

export default function AdminPanel() {
    const [data,setData]=useState([])

    const getData=async(e)=>{
        const domain=Api()
        const res=await axios.get(`${domain}getdoctor`)
        setData(res.data)
        if(!res){
            return res.status(404).send("No data found ")
        }else{
            return res.status(200).send("fetched successfully ") 
        }
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div className="min-h-screen flex bg-gray-100">

      <aside className="w-64 bg-teal-400 shadow-lg fixed h-full hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Admin Panel</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100">
                  <span>🏠</span>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100">
                <Link href={`/Dashboard/Adddoctor`}>  <span>👤</span>
                  <span className="ml-3">Doctores</span></Link>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100">
                  <span>⚙️</span>
                  <span className="ml-3">Settings</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100">
                  <span>📊</span>
                  <span className="ml-3">Analytics</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        {/* Mobile Header */}
        <header className="bg-white shadow-md p-4 md:hidden">
          <h1 className="text-xl font-bold text-gray-200">Admin </h1>
        </header>

        {/* Content Grid */}
        <div className="p-6">
          
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
              {/* Stats Cards */}
            <div className="bg-teal-300 p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Total Doctors</h3>
              <p className="text-2xl font-bold mt-2">1,234</p>
            </div>
            <div className="bg-teal-400 p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Active Sessions</h3>
              <p className="text-2xl font-bold mt-2">89</p>
            </div>
            <div className="bg-teal-400 p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Revenue</h3>
              <p className="text-2xl font-bold mt-2">$12,345</p>
            </div>
          </div>

      
    <div className="w-full px-4 py-8 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen overflow-y-scroll">
  <h1 className="text-3xl font-bold text-start text-teal-500 mb-10">Our Doctors</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4  gap-8">
    {data.map((doctor, index) => (
      <div
        key={index}
        className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-blue-200"
      >
   <Link href={`/Dashboard/${doctor._id}`}>
 <div className="bg-white rounded-2xl  hover:shadow-xl transition-shadow duration-300 p-2 w-full max-w-xs text-center flex flex-col items-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-80 bg-cover rounded-md   mb-4"
      />
      <h2 className="text-xl font-semibold text-black">Dr .{doctor.name}</h2>
      <p className="text-gray-600 font-light mb-2">{doctor.stream}</p>
      
    
    </div></Link>
        {/* Glowing animated border */}
   

     
      </div>
    ))}
  </div>
</div>

            {/* end */}
          
        </div>
      </main>
    </div>
  );
}
