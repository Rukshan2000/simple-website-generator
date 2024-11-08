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

  const handleDownload = () => {
    const blob = new Blob([
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${formData.username} - web page</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Poppins', sans-serif;
      color: #fff;
      overflow: hidden;
    }
    body {
      background: ${formData.bgGradient};
      background-size: 400% 400%;
      animation: gradientAnimation 12s ease infinite;
      text-align: center;
    }
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .shadow-box {
      position: absolute;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 0, 0, 0.6), transparent);
      animation: shadowPulse 3s ease-in-out infinite;
    }
    @keyframes shadowPulse {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.2); opacity: 1; }
    }
    .container {
      position: relative;
      animation: fadeIn 1.5s ease-in-out forwards;
      opacity: 0;
    }
    @keyframes fadeIn {
      to { opacity: 1; }
    }
    h1 {
      font-size: 2.2em;
      margin-bottom: 30px;
      letter-spacing: 1.5px;
      animation: fadeSlideDown 1s ease forwards;
      opacity: 0;
      transform: translateY(-20px);
    }
    @keyframes fadeSlideDown {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .button-group .btn {
      display: block;
      width: 220px;
      margin: 15px auto;
      padding: 15px;
      font-size: 1.2em;
      color: #fff;
      background: ${formData.btnGradient};
      border: none;
      border-radius: 50px;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      transition: background 0.3s;
    }
    .button-group .btn:hover {
      background: #333;
    }
    
    /* Modal styles */
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      position: relative;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 30px;
      color: #333;
      cursor: pointer;
    }
    #qrCodeCanvas {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="shadow-box"></div>
  <div class="container">
    <h1>Hi I am ${formData.username}.</h1>
    <div class="button-group">
      <a href="https://wa.me/${formData.whatsapp}" class="btn">Chat on WhatsApp</a>
      <a href="${formData.youtube}" class="btn">Visit YouTube</a>
      <a href="${formData.facebook}" class="btn">Like on Facebook</a>
      <a href="${formData.instagram}" class="btn">Follow on Instagram</a>
      <a href="javascript:void(0)" class="btn" onclick="openModal()">Scan My QR</a>
    </div>
  </div>

  <!-- Modal -->
  <div id="qrModal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>Scan the QR Code</h2>
      <div id="qrCodeCanvas"></div>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
  <script>
    function openModal() {
      document.getElementById('qrModal').style.display = 'flex';
      new QRCode(document.getElementById("qrCodeCanvas"), "${formData.qrLink}");
    }
    function closeModal() {
      document.getElementById('qrModal').style.display = 'none';
      document.getElementById('qrCodeCanvas').innerHTML = ''; // clear QR code when modal closes
    }

    // Close modal when clicking outside content
    window.onclick = function(event) {
      if (event.target == document.getElementById('qrModal')) {
        closeModal();
      }
    }
  </script>
</body>
</html>`
    ], { type: 'text/html' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${formData.username}-page.html`;
    link.click();
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="mb-8 text-4xl font-bold text-center text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Generate Your Web Page
      </motion.h1>
      <motion.form
        className="w-full max-w-xl p-6 bg-gray-800 rounded-lg shadow-lg sm:p-8"
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
              className="w-full p-2 mb-4 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-base"
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
          Genarate
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Form;
