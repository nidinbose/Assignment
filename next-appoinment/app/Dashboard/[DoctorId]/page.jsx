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
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    if (!id) return

    const getDoctor = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${domain}getdoctorId/${id}`)
        setDoctor(res.data)
      } catch (err) {
        console.error('Error fetching doctor:', err)
        setError('Failed to fetch doctor data')
      } finally {
        setLoading(false)
      }
    }

    const getAppointments = async () => {
      try {
        const res = await axios.get(`${domain}getbookings/${id}`)
        setAppointments(res.data)
      } catch (err) {
        console.error('Error fetching appointments:', err)
      }
    }

    getDoctor()
    getAppointments()
  }, [id, domain])

  const handleDelete = async () => {
    try {
      await axios.delete(`${domain}deletedoctor/${id}`)
      alert('Doctor deleted successfully')
      router.push('/Dashboard')
    } catch (error) {
      console.error('Error deleting doctor:', error)
      alert('Failed to delete doctor')
    }
  }

  if (loading) return <div className="p-6 text-center text-lg font-medium text-gray-600">Loading doctor data...</div>
  if (error) return <div className="p-6 text-red-600 text-center font-medium">{error}</div>
  if (!doctor) return <div className="p-6 text-center text-gray-500">Doctor not found</div>

  return (
    <div className="min-h-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto space-y-10 ">
        <header className="text-start">
          <h1 className="text-4xl font-bold text-[#031b4e]">Dr. {doctor.name}</h1>
          <p className="mt-2 text-gray-500">{doctor.stream || 'Specialization not specified'}</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 border p-4 rounded-xl">
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            {doctor.image ? (
              <img src={doctor.image} alt={doctor.name} className="w-72 h-96 object-cover rounded-2xl shadow-lg" />
            ) : (
              <div className="w-72 h-96 flex items-center justify-center bg-gray-200 text-gray-600 rounded-2xl shadow-lg">
                No Image
              </div>
            )}
          </div>

          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard label="Location" value={doctor.location} />
              <InfoCard label="Contact" value={doctor.contact} />
              <InfoCard label="Email" value={doctor.email} />
              <InfoCard label="Status" value={<span className="text-green-600">Active</span>} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Appointments</h2>
              {appointments.length === 0 ? (
                <p className="text-gray-500">No upcoming appointments found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto bg-white shadow-md rounded-xl overflow-hidden">
                    <thead className="bg-teal-100">
                      <tr className="text-left text-teal-700">
                        <th className="px-6 py-3">Patient</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Time</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appt, i) => (
                        <tr key={i} className="border-t">
                          <td className="px-6 py-4">{appt.name}</td>
                          <td className="px-6 py-4">{appt.date}</td>
                          <td className="px-6 py-4">{appt.time}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              appt.status === 'Confirmed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {appt.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="flex flex-wrap justify-end gap-4 pt-6">
              <ActionButton
                color="blue"
                label="Edit Profile"
                onClick={() => router.push(`/Dashboard/${id}/EditDoctor`)}
                iconPath="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
              <ActionButton
                color="red"
                label="Delete"
                onClick={handleDelete}
                iconPath="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
              <ActionButton
                color="gray"
                label="Go Back"
                onClick={() => router.back()}
                iconPath="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoCard({ label, value }) {
  return (
    <div className="p-4 bg-white border-b ">
      <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">{label}</p>
      <p className="mt-1 text-lg text-gray-800 font-semibold">{value || 'Not specified'}</p>
    </div>
  )
}

function ActionButton({ color, label, onClick, iconPath }) {
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    red: 'bg-red-600 hover:bg-red-700 text-white',
    gray: 'bg-gray-600 hover:bg-gray-700 text-white',
  }
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium shadow transition duration-300 ${colorClasses[color]}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
      </svg>
      {label}
    </button>
  )
}