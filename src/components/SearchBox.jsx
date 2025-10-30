import React from "react";

// Props'ları destructuring ile alıyoruz (Hafta-4 [cite: 408, 423])
const SearchBox = ({ query, dispatch }) => {
  
  // Handler function (Hafta-4 [cite: 56])
  const handleQueryChange = (event) => {
    dispatch({ type: "SET_QUERY", payload: event.target.value });
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Dizi veya film ara..."
        value={query} // Kontrollü bileşen
        onChange={handleQueryChange}
      />
    </div>
  );
};

export default SearchBox;