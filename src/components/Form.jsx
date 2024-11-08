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
    navigate('/template'); // This should work as long as '/template' exists
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8" // Added padding for responsiveness
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="mb-8 text-4xl font-bold text-center text-white" // Adjusted for better mobile display
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Generate Your Web Page
      </motion.h1>
      <motion.form
        className="w-full max-w-xl p-6 bg-gray-800 rounded-lg shadow-lg sm:p-8" // Adjusted width for mobile
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {['username', 'whatsapp', 'youtube', 'facebook', 'instagram', 'qrLink'].map((field, index) => (
          <motion.div
            key={field}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <label htmlFor={field} className="block mb-2 text-sm text-gray-400 capitalize sm:text-base">
              {field.replace(/([A-Z])/g, ' $1')}:
            </label>
            <input
              type="text"
              id={field}
              value={formData[field]}
              onChange={handleChange}
              required 
              className="w-full p-2 mb-4 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-base" // Added responsive text size
            />
          </motion.div>
        ))}

        {/* Background Gradient Selector */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="bgGradient" className="block mb-2 text-sm text-gray-400 sm:text-base">Select Background Gradient:</label>
          <div
            className="w-full p-2 mb-4 rounded"
            style={{ background: formData.bgGradient, height: '50px' }}
          />
          <select
            id="bgGradient"
            value={formData.bgGradient}
            onChange={handleChange}
            required 
            className="w-full p-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded sm:text-base"
          >
            {/* Gradient Options */}
            <option value="linear-gradient(135deg, #2c3e50, #34495e)">Dark Blue to Dark Gray</option>
            <option value="linear-gradient(135deg, #4b0082, #8a2be2)">Indigo to Blue Violet</option>
            <option value="linear-gradient(135deg, #232526, #414345)">Dark Gray to Darker Gray</option>
            <option value="linear-gradient(135deg, #000000, #434343)">Black to Dark Gray</option>
            <option value="linear-gradient(135deg, #5c258d, #4389a2)">Purple to Dark Cyan</option>
            <option value="linear-gradient(135deg, #4e2a84, #7b4b9b)">Dark Purple to Lavender</option>
            <option value="linear-gradient(135deg, #2b5876, #4e4376)">Dark Teal to Dark Purple</option>
            <option value="linear-gradient(135deg, #141E30, #243B55)">Navy Blue to Dark Blue</option>
          </select>
        </motion.div>

        {/* Button Gradient Selector */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <label htmlFor="btnGradient" className="block mb-2 text-sm text-gray-400 sm:text-base">Select Button Gradient:</label>
          <div
            className="w-full p-2 mb-4 rounded"
            style={{ background: formData.btnGradient, height: '50px' }}
          />
          <select
            id="btnGradient"
            value={formData.btnGradient}
            onChange={handleChange}
            required 
            className="w-full p-2 mb-4 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded sm:text-base"
          >
            {/* Button Gradient Options */}
            <option value="linear-gradient(135deg, #4e54c8, #8f94fb)">Blue to Light Blue</option>
            <option value="linear-gradient(135deg, #ff7e5f, #feb47b)">Pink to Orange</option>
            <option value="linear-gradient(135deg, #ff512f, #dd2476)">Red to Pink</option>
            <option value="linear-gradient(135deg, #56ccf2, #6e7bff)">Light Blue to Blue</option>
            <option value="linear-gradient(135deg, #00c6ff, #0072ff)">Sky Blue to Blue</option>
          </select>
        </motion.div>

        <motion.button
          onClick={handleSubmit}
          className="w-full p-3 mt-6 text-sm text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Form;
