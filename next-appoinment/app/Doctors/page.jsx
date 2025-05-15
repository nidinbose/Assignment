'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import Api from "../Api"
import Link from "next/link"

export default function DoctorsList() {
  const [data, setData] = useState([])

  const getDoctors = async () => {
    const domain = Api()
    const res = await axios.get(`${domain}getdoctor`)
    setData(res.data)
  }

  useEffect(() => {
    getDoctors()
  }, [])

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-12">
        Our Specialist Doctors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {data.map((item, index) => (
          <Link key={index} href={`/Doctors/${item._id}`}>
           <div className="bg-teal-300 border rounded-xl p-7">
             <div>
                <img src={item.image} alt="" className="h-96 w-80 rounded-md"/>
             </div>
             <div className="flex flex-col mt-4">
            <h1 className="font-semibold text-xl ">{item.name}</h1>
            <h2 className="text-gray-500 text-md">{item.stream}</h2>
             </div>
           </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
