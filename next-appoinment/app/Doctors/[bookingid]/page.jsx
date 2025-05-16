'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Api from '@/app/Api';
import { Calendar, Clock, MapPin, Mail, User, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

export default function Bookings() {
  const params = useParams();
  const id = params.bookingid;

  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const domain = Api();
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

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date();
    const selected = new Date(selectedDate);
    

    setFormData({ ...formData, date: selectedDate, time: '' });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setSuccess('');

  try {
    const domain = Api();
    const res = await axios.post(`${domain}addbooking`, {
      ...formData,
      doctorId: id,
      doctorName: doctor?.name, 
      status: "Booked"
    });

    if (res.status === 200 || res.status === 201) {
      setSuccess('Appointment booked successfully!');
      setAppointments(prev => [...prev, { ...formData, doctorId: id, doctorName: doctor?.name }]);
      setFormData({ name: '', date: '', time: '' });
    } else {
      setError('Booking failed. Please try again.');
    }
  } catch (error) {
    console.error('Booking error:', error);
    setError('Booking failed. Please try again.');
  }

  setLoading(false);
};

  return (
    <div className="min-h-full container mx-auto bg-white to-white">
    
      <div className="relative h-64 md:h-80 w-full overflow-hidden p-2 mb-7">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 opacity-100 p-2"
        />
        <img 
          src="https://e0.pxfuel.com/wallpapers/750/891/desktop-wallpaper-medical-for-medical.jpg" 
          alt="Medical background"
          className="w-full h-full object-cover rounded-xl relative"
        />
        {/* <div className='inset-0 bg-black/70 absolute rounded-xl p-2 w-full h-full'></div> */}
        <div className="absolute inset-0 flex items-center justify-start px-6 ">
          
        </div>
      </div>
       <div className='px-4 xl:px-0'>
        {doctor && (
            <div className='bg-white max-w-lg p-3 rounded-2xl'>
              <motion.h1 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-semibold text-[#031b4e] text-start px-4"
              >
                Book Your Appointment with <br className='mt-4'/> <span>Dr. {doctor.name}</span>
              </motion.h1>
              <h2 className='text-[#031b4e] text-start text-md  px-4   rounded-2xl mt-5 '>
                {doctor.stream}
              </h2>
            </div>
          )}
       </div>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-12">
        {doctor && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:col-span-1 flex flex-col h-full">
              <div className="relative pt-[75%]  overflow-hidden p-2">
                <img
                  src={doctor.image}
                  alt={`Dr. ${doctor.name}`}
                  className="absolute top-0 left-0 w-full h-full bg-cover p-3 rounded-4xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/default-doctor.jpg';
                  }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4 border-b border-gray-100 pb-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">Dr. {doctor.name}</h2>
                  <p className="text-[#031b4e] font-medium">{doctor.stream}</p>
                </div>
                
                <div className="space-y-4 mt-auto">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#031b4e] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Location</p>
                      <p className="text-gray-600 text-sm">{doctor.location || 'Not specified'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#031b4e] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Email</p>
                      <p className="text-gray-600 text-sm break-all">{doctor.email || 'Not specified'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#031b4e] mb-6">Schedule Your Visit</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <User className="w-5 h-5 text-[#031b4e]" />
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <Calendar className="w-5 h-5 text-[#031b4e]" />
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={handleDateChange}
                    min={today} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Please select today or a future date
                  </p>
                </div>

                {formData.date && (
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                      <Clock className="w-5 h-5 text-[#031b4e]" />
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map((slot) => (
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          key={slot}
                          disabled={isSlotBooked(slot)}
                          onClick={() => setFormData({ ...formData, time: slot })}
                          className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                            isSlotBooked(slot)
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : formData.time === slot
                              ? 'bg-[#031b4e] text-white shadow-md'
                              : 'bg-white text-[#031b4e] border-[#031b4e] hover:bg-cyan-50'
                          }`}
                        >
                          {slot}
                          {isSlotBooked(slot) && (
                            <span className="block text-xs mt-1">Booked</span>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading || !formData.time}
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 ${
                      loading || !formData.time
                        ? 'bg-[#031b4e] cursor-not-allowed'
                        : 'bg-[#031b4e] hover:bg-[#031b4e] shadow-md'
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Confirm Appointment'
                    )}
                  </motion.button>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 rounded-lg bg-red-100 text-red-700 text-center"
                  >
                    {error}
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 rounded-lg bg-green-100 text-green-700 text-center"
                  >
                    {success}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        )}

        {!doctor && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-16 h-16 bg-teal-200 rounded-full mb-4"></div>
              <div className="h-4 bg-[#031b4e] rounded w-48 mb-2"></div>
              <div className="h-4 bg-[#031b4e] rounded w-64"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}