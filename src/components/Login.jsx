import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the username and password are both "admin"
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      // Redirect to form page
      navigate('/form');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen p-6 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="mb-6 text-3xl font-bold text-gray-100"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Login to Your Account
      </motion.h1>

      <motion.form
        className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="username" className="block mb-2 text-gray-400">Username:</label>
        <input
          type="text"
          id="username"
          value={credentials.username}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 text-gray-200 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="password" className="block mb-2 text-gray-400">Password:</label>
        <input
          type="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          required
          className="w-full p-2 mb-6 text-gray-200 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <motion.button
          type="submit"
          className="w-full p-3 text-white bg-indigo-600 rounded shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Login;
