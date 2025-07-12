import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'; // Your landing page
import BlogIndexPage from './BlogIndexPage'; // The new blog list page
import BlogPostPage from './BlogPostPage'; // CORRECTED: This now matches your filename
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="blogs" element={<BlogIndexPage />} />
        <Route path="blogs/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
