'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Api from '@/app/Api';

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

export default function Bookings() {
  const params = useParams();
  const id = params.bookingid;

  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const domain=Api()
    if (id) {
      axios.get(`${domain}getdoctorId/${id}`)
        .then(res => setDoctor(res.data))
        .catch(err => console.error('Error fetching doctor:', err));

      axios.get(`${domain}getbookings/${id}`)
        .then(res => setAppointments(res.data))
        .catch(err => console.error('Error fetching appointments:', err));
    }
  }, [id]);

  const isSlotBooked = (time) => {
    return appointments.some(app => app.time === time && app.date === formData.date && app.doctorId === id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const domain=Api()
      const res = await axios.post(`${domain}addbooking`, {
        ...formData,
        doctorId: id,
        status:"Booked"
      });

      if (res.status === 200 || res.status === 201) {
        setSuccess('Appointment booked successfully!');
        setAppointments(prev => [...prev, { ...formData, doctorId: id }]);
        setFormData({ name: '', date: '', time: '' });
      } else {
        setSuccess('Booking failed. Try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setSuccess('Booking failed. Try again.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {doctor ? (
          <>
            <h1 className="text-2xl font-bold text-blue-700 mb-4">
              Book Appointment with Dr. {doctor.name}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    disabled={isSlotBooked(slot)}
                    onClick={() => setFormData({ ...formData, time: slot })}
                    className={`py-2 px-3 rounded-md border text-sm ${
                      isSlotBooked(slot)
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : formData.time === slot
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                    }`}
                  >
                    {slot} {isSlotBooked(slot) ? '(Booked)' : ''}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading || !formData.time}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                {loading ? 'Booking...' : 'Confirm Appointment'}
              </button>

              {success && <p className="text-green-600 mt-2">{success}</p>}
            </form>
          </>
        ) : (
          <p className="text-center text-gray-600">Loading doctor information...</p>
        )}
      </div>
    </div>
  );
}
