import React from "react";
import TVCard from "./TVCard";

const TVList = ({ shows, dispatch }) => {
  return (
    <div className="tv-list">
      {shows.map((show) => (
        // Listeler için 'key' prop'u zorunludur (Hafta-3 [cite: 988, 1002])
        <TVCard key={show.id} show={show} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TVList;