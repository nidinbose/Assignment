'use client'

import { useState } from 'react'
import axios from 'axios'
import Api from '@/app/Api'
import { useRouter } from 'next/navigation'
import { FaUserMd } from 'react-icons/fa'

export default function AddDoctor() {
  const router = useRouter()

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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
      if (![200, 201].includes(res.status)) throw new Error()

      alert(' Doctor added successfully!')
      setFormData({
        name: '',
        stream: '',
        location: '',
        contact: '',
        email: '',
        image: '',
      })
      setImagePreview(null)
      router.push('/Dashboard')
    } catch (error) {
      console.error(error)
      alert(' Failed to add doctor. Please try again.')
    }
  }

  return (
    <div className="min-h-full bg-white py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
    
        <div className="bg-blue-50 flex flex-col items-center justify-center p-8">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Doctor Preview"
              className="w-64 h-64 object-cover rounded-xl border-4 border-blue-300 shadow-lg transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-64 h-64 bg-gray-100 border-4 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-500">
              <FaUserMd className="text-4xl mb-2" />
              <span className="text-sm font-medium">Image Preview</span>
            </div>
          )}
          <p className="text-sm text-gray-500 mt-4">{imagePreview ? 'Selected Image' : 'No image selected'}</p>
        </div>

      
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Add New Doctor</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField name="name" value={formData.name} onChange={handleChange} placeholder="Doctor's Name" />
            <InputField name="stream" value={formData.stream} onChange={handleChange} placeholder="Specialization" />
            <InputField name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
            <InputField name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" />
            <InputField type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />

           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Doctor Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#031b4e] text-white py-3 px-6 rounded-xl font-semibold text-lg transition duration-200 shadow-md"
            >
              Submit Doctor
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function InputField({ name, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
      />
    </div>
  )
}
