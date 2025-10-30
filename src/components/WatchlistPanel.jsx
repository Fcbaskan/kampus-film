import React from "react";

const WatchlistPanel = ({ watchlist, dispatch }) => {
  return (
    <div className="watchlist-panel">
      <h4>🎬 Gösterime Girecekler ({watchlist.length})</h4>
      {watchlist.length === 0 ? (
        <p>Listeniz boş.</p>
      ) : (
        <ul>
          {watchlist.map(show => (
            <li key={show.id}>
              {show.name}
              <button 
                className="btn-remove"
                onClick={() => dispatch({ type: "REMOVE_WATCHLIST", payload: show })}
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      )}
      {watchlist.length > 0 && (
        <button 
          className="btn-clear"
          onClick={() => dispatch({ type: "CLEAR_WATCHLIST" })}
        >
          Tüm Listeyi Temizle
        </button>
      )}
    </div>
  );
};

export default WatchlistPanel;