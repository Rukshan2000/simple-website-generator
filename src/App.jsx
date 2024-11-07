


// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Template from './components/Template';
import Soon from './components/soon';


const App = () => {
  return (
    <BrowserRouter>

        <div className="flex-grow p-4">
        <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/template" element={<Template />} />
      </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
