import React from 'react';

const Pagination = ({ prjData, setCurrentPage }) => {
  return (
    <div className='ml-5'>
      <nav aria-label='Page navigation'>
        <ul className='inline-flex shadow-md'>
          <li>
            <button
              className='disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 h-10 px-5 text-red-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-red-100'
              disabled={prjData.currentPage === 1}
              onClick={() => setCurrentPage(currentPage => currentPage - 1)}
            >
              Prev
            </button>
          </li>
          {Array.from({ length: prjData.totalPages }, (_, i) => i + 1).map(
            page => (
              <li key={page}>
                <button
                  className={`h-10 px-5 text-${
                    prjData.currentPage === page
                      ? 'white bg-red-600'
                      : 'red-600 bg-white'
                  } transition-colors duration-150 focus:shadow-outline hover:bg-red-100`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              </li>
            )
          )}
          <li>
            <button
              className='disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none h-10 px-5 text-red-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-red-100'
              onClick={() => setCurrentPage(currentPage => currentPage + 1)}
              disabled={prjData.totalPages === prjData.currentPage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
