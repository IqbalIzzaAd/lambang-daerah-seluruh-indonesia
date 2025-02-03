import { useState } from "react";

const ProvinceList = ({ lambangs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Hitung jumlah total halaman
  const totalPages = Math.ceil(lambangs.length / itemsPerPage);

  // Tentukan index data yang akan ditampilkan berdasarkan halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = lambangs.slice(startIndex, endIndex);

  return (
    <div>
      <div className="container">
        {/*Menampilkan 8 lambang per halaman */}
        {currentItems.length > 0 ? (
          currentItems.map((lambang) => (
            <div className="card" key={lambang.id}>
              <img
                src={`https://symbolsofindonesia.vercel.app${lambang.url}`}
                alt={`Lambang ${lambang.title}`}
                className="img-list"
              />
              <h5>{lambang.title}</h5>
            </div>
          ))
        ) : (
          <p>Memuat data...</p>
        )}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ⬅️ Sebelumnya
          </button>
          <span>
            Halaman {currentPage} dari {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Selanjutnya ➡️
          </button>
        </div>
      )}
    </div>
  );
};

export default ProvinceList;
