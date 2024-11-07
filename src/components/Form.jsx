import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    whatsapp: '',
    youtube: '',
    facebook: '',
    instagram: '',
    qrLink: '',
    bgGradient: 'linear-gradient(135deg, #1f4037, #99f2c8)',
    btnGradient: 'linear-gradient(135deg, #4e54c8, #8f94fb)',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/template');
  };

  return (
    <motion.div 
      className="container mx-auto p-8 min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-3xl font-bold text-gray-100 mb-6" 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Generate Your Interactive Page
      </motion.h1>
      <motion.form 
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <label htmlFor="username" className="block text-gray-400 mb-2">Name:</label>
        <input 
          type="text" 
          id="username" 
          value={formData.username} 
          onChange={handleChange} 
          required 
          className="w-full p-2 mb-4 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="whatsapp" className="block text-gray-400 mb-2">WhatsApp Number:</label>
        <input 
          type="text" 
          id="whatsapp" 
          value={formData.whatsapp} 
          onChange={handleChange} 
          required 
          className="w-full p-2 mb-4 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="youtube" className="block text-gray-400 mb-2">YouTube Link:</label>
        <input 
          type="text" 
          id="youtube" 
          value={formData.youtube} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="facebook" className="block text-gray-400 mb-2">Facebook Link:</label>
        <input 
          type="text" 
          id="facebook" 
          value={formData.facebook} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="instagram" className="block text-gray-400 mb-2">Instagram Link:</label>
        <input 
          type="text" 
          id="instagram" 
          value={formData.instagram} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="qrLink" className="block text-gray-400 mb-2">QR Code Link:</label>
        <input 
          type="text" 
          id="qrLink" 
          value={formData.qrLink} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="bgGradient" className="block text-gray-400 mb-2">Select Background Gradient:</label>
        <select 
          id="bgGradient" 
          value={formData.bgGradient} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 bg-gray-800 text-gray-200 border border-gray-700 rounded"
        >
          <option value="linear-gradient(135deg, #1f4037, #99f2c8)">Green to Light Green</option>
          <option value="linear-gradient(135deg, #ff7e5f, #feb47b)">Pink to Orange</option>
        </select>

        <label htmlFor="btnGradient" className="block text-gray-400 mb-2">Select Button Gradient:</label>
        <select 
          id="btnGradient" 
          value={formData.btnGradient} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 bg-gray-800 text-gray-200 border border-gray-700 rounded"
        >
          <option value="linear-gradient(135deg, #4e54c8, #8f94fb)">Purple to Blue</option>
          <option value="linear-gradient(135deg, #f7971e, #ffd200)">Orange to Yellow</option>
        </select>

        <motion.button 
          type="button" 
          onClick={handleSubmit} 
          className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Generate Website
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Form;
