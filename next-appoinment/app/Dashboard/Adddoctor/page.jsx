'use client'

import { useState } from 'react'
import axios from 'axios'
import Api from '@/app/Api'

export default function Adddoctor() {
  const [formData, setFormData] = useState({
    name: '',
    stream: '',
    location: '',
    contact: '',
    email: '',
    image: '',
  })

  const [imagePreview, setImagePreview] = useState(null)
  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
  }
   


  const handleImageChange = async (e) => {
    const file = e.target.files[0]
    if (file) {
      const base64 = await convertToBase64(file)
      setFormData((prev) => ({ ...prev, image: base64 }))
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const domain = Api()
      const res = await axios.post(`${domain}adddoctor`, formData)
      if (res.status !== 200 && res.status !== 201) {
        alert('Data adding failed')
        return
      }
      alert('Doctor added successfully')
      setFormData({
        name: '',
        stream: '',
        location: '',
        contact: '',
        email: '',
        image: '',
      })
      setImagePreview(null)
    } catch (error) {
      console.error(error)
      alert('Failed to add doctor')
    }
  }

  return (
   <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
  <header className="bg-teal-400 text-white py-5 px-6 shadow-md">
    <h1 className="text-2xl md:text-xl font-bold tracking-wide">
     Add Doctor
    </h1>
  </header>
  <main className="flex-1 flex items-center justify-center p-6">
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-blue-50 flex items-center justify-center p-8">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Doctor Preview"
            className="rounded-lg w-64 h-64 object-cover border-4 border-blue-300 shadow-md"
          />
        ) : (
          <div className="text-center text-gray-400">
            <div className="w-64 h-64 bg-gray-200 border-dashed border-4 border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-lg font-medium">Image Preview</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">No image selected</p>
          </div>
        )}
      </div>
      <div className="md:w-1/2 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Doctor
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Doctor's Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="stream"
              placeholder="Specialization"
              value={formData.stream}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-400 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </main>
</div>

  )
}
