import React from "react";

const Filters = ({ filters, dispatch }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    // Birden fazla filtreyi yönetmek için
    dispatch({
      type: "SET_FILTERS",
      payload: { ...filters, [name]: value },
    });
  };

  return (
    <div className="filters">
      <select name="genre" value={filters.genre} onChange={handleFilterChange}>
        <option value="All">Tüm Türler</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Science-Fiction">Science-Fiction</option>
      </select>
      
      <select name="language" value={filters.language} onChange={handleFilterChange}>
        <option value="All">Tüm Diller</option>
        <option value="English">English</option>
        <option value="Turkish">Turkish</option>
      </select>
      
      <label>
        Min. Puan:
        <input 
          type="range" 
          name="rating" 
          min="0" 
          max="10" 
          step="0.5" 
          value={filters.rating} 
          onChange={handleFilterChange} 
        />
        {filters.rating}
      </label>
    </div>
  );
};

export default Filters;