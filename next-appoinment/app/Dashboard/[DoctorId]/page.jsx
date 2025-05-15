'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Api from '@/app/Api'

export default function ViewDoctorPage() {
  const { DoctorId: id } = useParams()
  const router = useRouter()
  const domain = Api()

  const [doctor, setDoctor] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    const getDoctor = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${domain}getdoctorId/${id}`)
        setDoctor(res.data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching doctor:', err)
        setError('Failed to fetch doctor data')
        setLoading(false)
      }
    }

    getDoctor()
 
  }, [id, domain])

  const handleDelete = async () => {
  try {
    await axios.delete(`${domain}deletedoctor/${id}`);
    alert('Doctor deleted successfully');
    router.push('/Dashboard');
  } catch (error) {
    console.error('Error deleting doctor:', error);
    alert('Failed to delete doctor');
  }
};

  if (loading) return <div className="p-6">Loading doctor data...</div>
  if (error) return <div className="p-6 text-red-600">{error}</div>
  if (!doctor) return <div className="p-6">Doctor not found</div>

  return (
   <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
    
        <header className="bg-white  text-black p-6 rounded-xl  mb-8 ">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="text-teal-400">Doctor</span> Profile
          </h1>
          <p className="text-gray-500 mt-2">Advanced medical professional details</p>
        </header>
        <div className="bg-white backdrop-blur-lg rounded-2xl overflow-hidden ">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 p-8 flex items-center justify-center  relative">
              {doctor.image ? (
                <div className="relative group">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="relative w-80 h-96 rounded-md bg-cover  shadow-xl z-10"
                  />
                </div>
              ) : (
                <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 border-4 border-dashed border-gray-600">
                  <span className="text-lg">No Image</span>
                </div>
              )}
            </div>
            <div className="lg:w-3/5 p-5 border">
              <div className="space-y-6">
                <div className="border-b border-gray-700/50 pb-6">
                  <h2 className="text-3xl font-semibold text- tracking-wide">
                    {doctor.name || 'N/A'}
                  </h2>
                  <p className="text-teal-400 font-mono mt-1 text-lg">
                    {doctor.stream || 'Specialization not specified'}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-xl border border-gray-600/30">
                    <p className="text-sm text-teal-400 uppercase tracking-wider">Location</p>
                    <p className="text-black mt-1 text-lg font-medium">
                      {doctor.location || 'Not specified'}
                    </p>
                  </div>

                  <div className="bg-white  p-4 rounded-xl border border-gray-600/30">
                    <p className="text-sm text-teal-400 uppercase tracking-wider">Contact</p>
                    <p className="text-black mt-1 text-lg font-medium">
                      {doctor.contact || 'Not available'}
                    </p>
                  </div>

                  <div className="bg-white  p-3 rounded-xl border border-gray-600/30">
                    <p className="text-sm text-teal-400 uppercase tracking-wider">Email</p>
                    <p className="text-black mt-1 text-lg font-medium break-all">
                      {doctor.email || 'Not provided'}
                    </p>
                  </div>

                  <div className="white p-4 rounded-xl border border-gray-600/30">
                    <p className="text-sm text-teal-400 uppercase tracking-wider">Status</p>
                    <p className="text-green-400 mt-1 text-lg font-medium flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      Active
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-6 justify-end">
                  <button
                    onClick={() => router.push(`/Dashboard/${id}/EditDoctor`)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit Profile
                  </button>

                  <button
                    onClick={handleDelete}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </button>

                  <button
                    onClick={() => router.back()}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/30 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
