import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App             from './App';
import BlogIndexPage   from './BlogIndexPage';
import BlogPostPage    from './BlogPostPage';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<BlogIndexPage />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
