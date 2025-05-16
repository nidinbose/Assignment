"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Api from "@/app/Api";
import { Loader2 } from "lucide-react";

export default function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const domain = Api();
      const res = await axios.get(`${domain}getappoinment`);
      setAppointments(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = () => {
    let result = appointments;

    if (doctorName.trim()) {
      result = result.filter((a) =>
        a.doctorName.toLowerCase().includes(doctorName.trim().toLowerCase())
      );
    }
    if (date) {
      result = result.filter((a) => a.date === date);
    }
    if (time) {
      result = result.filter((a) => a.time === time);
    }

    setFiltered(result);
  };

  const resetFilter = () => {
    setDoctorName("");
    setDate("");
    setTime("");
    setFiltered(appointments);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#00174f] mb-6 text-center">
        Appointment Management
      </h2>
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Doctor Name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleFilter}
            className="bg-[#00174f] text-white px-4 py-2 rounded-lg hover:bg-[#002d89] transition"
          >
            Apply Filter
          </button>
          <button
            onClick={resetFilter}
            className="border border-[#00174f] text-[#00174f] px-4 py-2 rounded-lg hover:bg-[#00174f] hover:text-white transition"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        {loading ? (
          <div className="flex justify-center items-center p-10">
            <Loader2 className="animate-spin w-6 h-6 text-blue-500 mr-2" />
            <span>Loading appointments...</span>
          </div>
        ) : (
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-blue-100 text-[#00174f] uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3 text-left">Patient Name</th>
                <th className="px-6 py-3 text-left">Doctor Name</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((apt, idx) => (
                  <tr
                    key={idx}
                    className="border-t hover:bg-blue-50 transition"
                  >
                    <td className="px-6 py-4">{apt.name}</td>
                    <td className="px-6 py-4">{apt.doctorName}</td>
                    <td className="px-6 py-4">{apt.date}</td>
                    <td className="px-6 py-4">{apt.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-gray-500 py-10 italic"
                  >
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
