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
      className="container flex flex-col items-center justify-center min-h-screen p-8 mx-auto bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ background: '#0d0d0d' }}
    >
      <motion.h1
        className="mb-8 text-4xl font-bold text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Generate Your Interactive Page
      </motion.h1>
      <motion.form
        className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg"
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
            <label htmlFor={field} className="block mb-2 text-gray-400 capitalize">
              {field.replace(/([A-Z])/g, ' $1')}:
            </label>
            <input
              type="text"
              id={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 text-gray-200 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="bgGradient" className="block mb-2 text-gray-400">Select Background Gradient:</label>
          <select
            id="bgGradient"
            value={formData.bgGradient}
            onChange={handleChange}
            className="w-full p-2 mb-4 text-gray-200 bg-gray-700 border border-gray-600 rounded"
          >
            <option value="linear-gradient(135deg, #1f4037, #99f2c8)">Green to Light Green</option>
            <option value="linear-gradient(135deg, #ff7e5f, #feb47b)">Pink to Orange</option>
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <label htmlFor="btnGradient" className="block mb-2 text-gray-400">Select Button Gradient:</label>
          <select
            id="btnGradient"
            value={formData.btnGradient}
            onChange={handleChange}
            className="w-full p-2 mb-4 text-gray-200 bg-gray-700 border border-gray-600 rounded"
          >
            <option value="linear-gradient(135deg, #4e54c8, #8f94fb)">Purple to Blue</option>
            <option value="linear-gradient(135deg, #f7971e, #ffd200)">Orange to Yellow</option>
          </select>
        </motion.div>

        <motion.button
          type="button"
          onClick={handleSubmit}
          className="w-full p-3 mt-4 text-white rounded shadow-lg"
          style={{ background: formData.btnGradient }}
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
