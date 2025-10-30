import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetail from './pages/ShowDetail';
import Footer from './components/Footer';
import './App.css'; // Global stilleri (Adım 7) içe aktar

function App() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Kampüs Film Kulübü 🍿</h1>
      </header>
      
      <main className="app-main-content">
        <Routes>
          {/* Ana Sayfa Yolu */}
          <Route path="/" element={<Home />} /> 
          
          {/* Detay Sayfası Yolu (:id dinamik bir parametredir) */}
          <Route path="/show/:id" element={<ShowDetail />} /> 
        </Routes>
      </main>
      
      {/* Footer her sayfada görünür  */}
      <Footer /> 
    </div>
  );
}

export default App;