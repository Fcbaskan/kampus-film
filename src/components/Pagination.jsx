import React from "react";

const Pagination = ({ currentPage, totalPages, dispatch }) => {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch({ type: "SET_PAGE", payload: page });
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
        İlk
      </button>
      <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        Geri
      </button>
      
      <span>Sayfa {currentPage} / {totalPages}</span>
      
      <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
        İleri
      </button>
      <button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>
        Son
      </button>
    </div>
  );
};

export default Pagination;