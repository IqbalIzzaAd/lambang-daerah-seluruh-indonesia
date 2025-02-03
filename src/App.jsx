import { useState, useEffect } from "react";
import axios from "axios";
import ProvinceList from "./components/ProvinceList";

function App() {
  const [lambangs, setLambang] = useState([]);
  const [search, setSearch] = useState("");
  const [filterLetter, setFilterLetter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const getDataLambangs = async () => {
    try {
      const [provincesRes, regenciesRes] = await Promise.all([
        axios.get("/api/provinces/200"), // API untuk provinsi
        axios.get("/api/regencies/200"), // API untuk kabupaten/kota
      ]);

      console.log("Data Provinsi:", provincesRes.data);
      console.log("Data Kabupaten/Kota:", regenciesRes.data);

      // Gabungkan kedua data
      const combinedData = [...provincesRes.data, ...regenciesRes.data];

      setLambang(combinedData);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  useEffect(() => {
    getDataLambangs();
  }, []);

  //Filter berdasarkan pencarian dan huruf awal
  const filteredLambangs = lambangs
    .filter((lambang) => 
      lambang.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((lambang) =>
      filterLetter ? lambang.title.startsWith(filterLetter) : true
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  return (
    <div className="app">
  <div className="hero">
    <div className="hero-content">
      <h1 className="hero-title">Lambang Daerah Seluruh Indonesia</h1>

      {/*Input Pencarian */}
      <div className="input">
        <input
          type="text"
          placeholder="Cari provinsi/daerah.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {/*Dropdown Filter (Huruf A-Z) */}
        <select onChange={(e) => setFilterLetter(e.target.value)} className="dropdown">
          <option value="">Urutkan</option>
          {[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => (
            <option key={letter} value={letter}>
              {letter}
            </option>
          ))}
        </select>

        {/*Dropdown Sorting (A-Z & Z-A) */}
        <select onChange={(e) => setSortOrder(e.target.value)} className="dropdown">
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
  </div>

  {/*Komponen Daftar Provinsi */}
  <ProvinceList lambangs={filteredLambangs} />
</div>

    
  );
}

export default App;
