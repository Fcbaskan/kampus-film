import React from "react";
import { Link } from "react-router-dom"; // Sayfa yönlendirmesi için

const TVCard = ({ show, dispatch }) => {
  const handleAddWatchlist = () => {
    dispatch({ type: "ADD_WATCHLIST", payload: show });
  };

  // API'den gelen özeti temizle (HTML etiketlerini kaldır)
  const summary = show.summary ? show.summary.replace(/<[^>]*>?/gm, "") : "Özet bulunamadı.";
  
  return (
    <div className="tv-card">
      <img 
        src={show.image ? show.image.medium : 'https://movieclub-sooty.vercel.app/placeholder.svg'} 
        alt={show.name} 
      />
      <div className="tv-card-info">
        <h3>{show.name}</h3>
        <p>
          <span>{show.language}</span>
          <span>Puan: {show.rating?.average || "N/A"}</span>
        </p>
        <p className="summary">{summary.substring(0, 100)}...</p>
        <div className="tv-card-buttons">
          <button onClick={handleAddWatchlist}>Kısa Listeye Ekle</button>
          {/* Link bileşeni, /show/:id formatında detay sayfasına yönlendirir [cite: 1860] */}
          <Link to={`/show/${show.id}`} className="btn-detail">
            Detay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TVCard;