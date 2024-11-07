import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Generate Your Interactive Page</h1>
      <form className="bg-white p-6 shadow-md rounded-md">
        <label htmlFor="username">Name:</label>
        <input type="text" id="username" value={formData.username} onChange={handleChange} required className="w-full p-2 mt-2 mb-4 border" />

        <label htmlFor="whatsapp">WhatsApp Number:</label>
        <input type="text" id="whatsapp" value={formData.whatsapp} onChange={handleChange} required className="w-full p-2 mt-2 mb-4 border" />

        <label htmlFor="youtube">YouTube Link:</label>
        <input type="text" id="youtube" value={formData.youtube} onChange={handleChange} className="w-full p-2 mt-2 mb-4 border" />

        <label htmlFor="facebook">Facebook Link:</label>
        <input type="text" id="facebook" value={formData.facebook} onChange={handleChange} className="w-full p-2 mt-2 mb-4 border" />

        <label htmlFor="instagram">Instagram Link:</label>
        <input type="text" id="instagram" value={formData.instagram} onChange={handleChange} className="w-full p-2 mt-2 mb-4 border" />

        <label htmlFor="qrLink">QR Code Link:</label>
        <input type="text" id="qrLink" value={formData.qrLink} onChange={handleChange} className="w-full p-2 mt-2 mb-4 border" />

        <label htmlFor="bgGradient">Select Background Gradient:</label>
        <select id="bgGradient" value={formData.bgGradient} onChange={handleChange} className="w-full p-2 mt-2 mb-4 border">
          <option value="linear-gradient(135deg, #1f4037, #99f2c8)">Green to Light Green</option>
          <option value="linear-gradient(135deg, #ff7e5f, #feb47b)">Pink to Orange</option>
          {/* Add other options */}
        </select>

        <label htmlFor="btnGradient">Select Button Gradient:</label>
        <select id="btnGradient" value={formData.btnGradient} onChange={handleChange} className="w-full p-2 mt-2 mb-4 border">
          <option value="linear-gradient(135deg, #4e54c8, #8f94fb)">Purple to Blue</option>
          <option value="linear-gradient(135deg, #f7971e, #ffd200)">Orange to Yellow</option>
          {/* Add other options */}
        </select>

        <button type="button" onClick={handleSubmit} className="bg-gray-800 text-white p-2 rounded mt-4">Generate Website</button>
      </form>
    </div>
  );
};

export default Form;
