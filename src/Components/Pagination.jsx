import React from 'react'



const Pagination = ({ currentPage, totalPages, onPageChange, onScrollToList}) => {
    const handlePageChange = (page) => {
        onPageChange(page);
        if(onScrollToList) onScrollToList();
    }
  return (
    <div className='pagination'>
        <button
            onClick={()=> handlePageChange(currentPage-1)}
            disabled={currentPage === 1}
            >
            Previus
        </button>

        <span>{currentPage} / {totalPages}</span>

        <button onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            >
            Next
        </button>
    </div>
    
  )
}

export default Pagination