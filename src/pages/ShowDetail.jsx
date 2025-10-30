import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // useParams: URL'den :id'yi almak için
import axios from "axios";

// Detay ve Bölüm API endpointleri [cite: 1860, 1861]
const API_SHOW = "https://api.tvmaze.com/shows/";

const ShowDetail = () => {
  // URL'den {id: "123"} şeklinde id'yi al
  const { id } = useParams(); 

  // Bu sayfanın kendi state'leri (Hafta-4 [cite: 215])
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        // İki API isteğini aynı anda yap
        const [showResult, episodesResult] = await Promise.all([
          axios.get(`${API_SHOW}${id}`),
          axios.get(`${API_SHOW}${id}/episodes`)
        ]);
        
        setShow(showResult.data);
        setEpisodes(episodesResult.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id]); // id değiştiğinde tekrar veri çek

  // Koşullu Render
  if (isLoading) return <p className="loading-message">Yükleniyor...</p>;
  if (isError) return <p className="error-message">Hata oluştu.</p>;
  if (!show) return <p>Dizi bulunamadı.</p>;
  
  const summary = show.summary ? show.summary.replace(/<[^>]*>?/gm, "") : "Özet bulunamadı.";

  return (
    <div className="detail-container">
      <Link to="/" className="btn-back">{"<"} Ana Sayfaya Dön</Link>
      
      <div className="detail-header">
        <img src={show.image?.medium} alt={show.name} />
        <div className="detail-info">
          <h1>{show.name}</h1>
          <p>{summary}</p>
          <p><strong>Tür:</strong> {show.genres?.join(", ")}</p>
          <p><strong>Puan:</strong> {show.rating?.average}</p>
          <p><strong>Yayın Durumu:</strong> {show.status}</p>
        </div>
      </div>
      
      <div className="detail-episodes">
        <h2>Bölümler ({episodes.length})</h2>
        <ul>
          {episodes.map(ep => (
            <li key={ep.id}>
              S{ep.season}E{ep.number} - {ep.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowDetail;