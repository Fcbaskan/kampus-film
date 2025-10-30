import React, { useEffect, useReducer } from "react";
import axios from "axios";

// Ders notlarındaki gibi[cite: 408, 1759], bileşenleri içe aktarıyoruz
import SearchBox from "../components/SearchBox";
import Filters from "../components/Filters";
import TVList from "../components/TVList";
import WatchlistPanel from "../components/WatchlistPanel";
import Pagination from "../components/Pagination";

// TVMaze API adresi [cite: 1859]
const API_SEARCH = "https://api.tvmaze.com/search/shows?q=";

// 1. Başlangıç State (Durumu)
const initialState = {
  isLoading: false,
  isError: false,
  shows: [],         // API'den gelen tüm diziler
  watchlist: [],     // Gösterim listesine eklenenler
  query: "suits",  // Varsayılan arama sorgusu [cite: 1863]
  filters: {       // Filtreleme state'i
    genre: "All",
    language: "All",
    rating: 0,
  },
  pagination: {
    pageSize: 6,     // Her sayfada 6 dizi [cite: 1871]
    currentPage: 1,
  },
};

// 2. Reducer Fonksiyonu (Hafta-5 [cite: 1468] temel alınarak)
// Ödevde istenen tüm eylemleri (action) içerir 
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT": // Veri çekme başladığında
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS": // Veri başarıyla geldiğinde
      return {
        ...state,
        isLoading: false,
        isError: false,
        shows: action.payload,
      };
    case "FETCH_FAILURE": // Veri çekme başarısız olduğunda
      return { ...state, isLoading: false, isError: true };
    case "SET_QUERY": // Arama metni değiştiğinde
      return { ...state, query: action.payload, pagination: { ...state.pagination, currentPage: 1 } };
    case "SET_FILTERS": // Filtreler değiştiğinde
      return { ...state, filters: action.payload, pagination: { ...state.pagination, currentPage: 1 } };
    
    // Gösterim Listesi Eylemleri
    case "ADD_WATCHLIST":
      // Zaten listede yoksa ekle
      if (state.watchlist.find((show) => show.id === action.payload.id)) {
        return state;
      }
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    case "REMOVE_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((show) => show.id !== action.payload.id),
      };
    case "CLEAR_WATCHLIST":
      return { ...state, watchlist: [] };

    // Sayfalama Eylemleri
    case "SET_PAGE":
      return { ...state, pagination: { ...state.pagination, currentPage: action.payload } };
    
    default:
      throw new Error();
  }
};

const Home = () => {
  // 3. Reducer'ı ve state'i başlat
  const [state, dispatch] = useReducer(reducer, initialState);

  // 4. Veri Çekme (useEffect ve Axios - Hafta-5 [cite: 1375, 1623])
  useEffect(() => {
    // Arama sorgusu boşsa API'ye gitme
    if (state.query.trim() === "") {
      dispatch({ type: "FETCH_SUCCESS", payload: [] });
      return;
    }

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        // async/await (Hafta-5 [cite: 1651]) ve axios kullanıyoruz
        const result = await axios.get(`${API_SEARCH}${state.query}`);
        // Gelen veriyi (result.data) map'leyerek sadece show nesnelerini alıyoruz
        const showsData = result.data.map(item => item.show);
        dispatch({ type: "FETCH_SUCCESS", payload: showsData });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    // Arama sorgusu değiştiğinde veriyi çek
    fetchData();
  }, [state.query]); // useEffect, state.query değiştiğinde tetiklenir

  
  // 5. Filtreleme ve Sayfalama Mantığı
  // API'den gelen 'shows' listesini filtrele ve sayfala
  const getFilteredAndPaginatedShows = () => {
    const filteredShows = state.shows.filter(show => {
      const { genre, language, rating } = state.filters;
      const showGenre = show.genres ? show.genres.join(", ") : "";
      
      return (
        (genre === "All" || (showGenre && showGenre.includes(genre))) &&
        (language === "All" || (show.language && show.language === language)) &&
        (rating === 0 || (show.rating && show.rating.average >= rating))
      );
    });

    const { currentPage, pageSize } = state.pagination;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    const paginatedShows = filteredShows.slice(startIndex, endIndex);
    
    return { paginatedShows, totalPages: Math.ceil(filteredShows.length / pageSize) };
  };

  const { paginatedShows, totalPages } = getFilteredAndPaginatedShows();

  // 6. JSX (Render)
  // Bileşen Kompozisyonu (Composition) 
  // ve Koşullu Render (Conditional Rendering) 
  return (
    <div className="home-container">
      <header className="home-header">
        <SearchBox query={state.query} dispatch={dispatch} />
        <Filters filters={state.filters} dispatch={dispatch} />
      </header>

      <main className="home-main">
        <div className="list-area">
          {/* Koşullu Render (Hafta-5 [cite: 1427-1429]) */}
          {state.isError && <p className="error-message">Bir hata oluştu, lütfen tekrar deneyin.</p>}
          
          {state.isLoading ? (
            <p className="loading-message">Diziler yükleniyor...</p>
          ) : (
            <>
              {paginatedShows.length > 0 ? (
                <TVList shows={paginatedShows} dispatch={dispatch} />
              ) : (
                <p className="empty-message">Arama kriterlerine uygun dizi bulunamadı.</p>
              )}
              
              <Pagination 
                currentPage={state.pagination.currentPage} 
                totalPages={totalPages} 
                dispatch={dispatch} 
              />
            </>
          )}
        </div>
        
        <aside className="watchlist-area">
          <WatchlistPanel watchlist={state.watchlist} dispatch={dispatch} />
        </aside>
      </main>
    </div>
  );
};

export default Home;