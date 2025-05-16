'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Api from '@/app/Api'

export default function DoctorDetails() {
  const { DoctorId: id } = useParams()
  const router = useRouter()
  const domain = Api()

  const [doctor, setDoctor] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    const fetchDoctor = async () => {
      try {
        const res = await axios.get(`${domain}getdoctorId/${id}`)
        setDoctor(res.data)
      } catch (err) {
        setError('Doctor data fetch failed.')
      }
    }

    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`${domain}getbookings/${id}`)
        setAppointments(res.data)
      } catch {
        console.warn('Could not fetch appointments')
      }
    }

    Promise.all([fetchDoctor(), fetchAppointments()]).finally(() => setLoading(false))
  }, [id, domain])

  const handleDelete = async () => {
    try {
      await axios.delete(`${domain}deletedoctor/${id}`)
      alert('Doctor deleted successfully.')
      router.push('/Dashboard')
    } catch {
      alert('Delete failed.')
    }
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>
  if (!doctor) return <p className="text-center">Doctor not found.</p>

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans">
     
      <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
          <div className="col-span-1 flex justify-center md:justify-start">
            {doctor.image ? (
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full max-w-xs h-auto bg-cover rounded-2xl shadow-lg border"
              />
            ) : (
              <div className="w-full max-w-xs h-80 bg-gray-200 flex items-center justify-center text-gray-600 rounded-2xl shadow-inner">
                No Image
              </div>
            )}
          </div>

       
          <div className="col-span-2 space-y-6">
            <h1 className="font-semibold text-2xl sm:text-3xl">{doctor.name}</h1>
            <h2 className="font-medium text-lg sm:text-xl text-gray-600">{doctor.stream}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DetailCard icon="📍" label="Location" value={doctor.location} />
              <DetailCard icon="📞" label="Contact" value={doctor.contact} />
              <DetailCard icon="📧" label="Email" value={doctor.email} />
              <DetailCard icon="✅" label="Status" value={<span className="text-green-600 font-semibold">Active</span>} />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-end gap-4 pt-4 border-t mt-4">
              <ActionButton
                color="blue"
                label="Edit Profile"
                icon="✏️"
                onClick={() => router.push(`/Dashboard/${id}/EditDoctor`)}
              />
              <ActionButton
                color="red"
                label="Delete"
                icon="🗑️"
                onClick={handleDelete}
              />
              <ActionButton
                color="gray"
                label="Back"
                icon="⬅️"
                onClick={() => router.back()}
              />
            </div>
          </div>
        </div>
      </div>


      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Appointments</h3>
        {appointments.length === 0 ? (
          <p className="text-gray-500">No appointments scheduled.</p>
        ) : (
          <div className="overflow-auto border rounded-xl">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-blue-50 text-blue-800">
                <tr>
                  <th className="p-4">Patient</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, i) => (
                  <tr key={i} className="even:bg-gray-50 border-t">
                    <td className="p-4">{appt.name}</td>
                    <td className="p-4">{appt.date}</td>
                    <td className="p-4">{appt.time}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          appt.status === 'Confirmed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {appt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}

function DetailCard({ icon, label, value }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 flex items-start gap-3 border hover:shadow-md transition">
      <div className="text-xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="mt-1 text-base text-gray-800 font-semibold">{value || 'Not specified'}</p>
      </div>
    </div>
  )
}

// Button component
function ActionButton({ label, onClick, color = 'gray', icon }) {
  const colors = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    red: 'bg-red-600 hover:bg-red-700 text-white',
    gray: 'bg-gray-500 hover:bg-gray-600 text-white',
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-semibold shadow transition transform hover:scale-105 ${colors[color]}`}
    >
      <span>{icon}</span>
      {label}
    </button>
  )
}
