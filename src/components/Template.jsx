import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


const Template = () => {
  const formData = JSON.parse(localStorage.getItem('formData')) || {};

  useEffect(() => {
    // Trigger download of the HTML file when the component loads
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
</html>

`
    ], { type: 'text/html' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${formData.username}-page.html`;
    link.click();
  }, [formData]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="mb-6 text-2xl font-semibold text-gray-100"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Your HTML file is being downloaded...
      </motion.h2>

      <motion.div
        className="max-w-2xl p-8 mx-auto bg-gray-800 rounded-lg shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <h3 className="mb-4 text-lg font-bold text-gray-100">Steps to Deploy Your Page on Netlify:</h3>
        <ul className="space-y-3 text-left list-decimal list-inside">
          <li className="text-gray-300">
            <span className="font-semibold">Go to:</span> <a href="https://app.netlify.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Netlify</a> and sign in or sign up.
          </li>
          <li className="text-gray-300">
            <span className="font-semibold">Click on:</span> "New site from Git" or "Add New Site" and choose the drag and drop option.
          </li>
          <li className="text-gray-300">
            <span className="font-semibold">Upload:</span> The HTML file you just downloaded by dragging and dropping it into the box.
          </li>
          <li className="text-gray-300">
            Wait for the deployment process to complete. Netlify will give you a link to your site.
          </li>
          <li className="text-gray-300">
            <span className="font-semibold">Share:</span> The link with others to show them your interactive page!
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Template;
