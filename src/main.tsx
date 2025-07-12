import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'; // This will be your landing page
import BlogPage from './BlogPage'; // This will be your new blog page
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
