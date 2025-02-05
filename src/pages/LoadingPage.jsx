import { motion } from "framer-motion";
import "../css/index.css";

const LoadingPage = () => {
  return (
    <motion.div
      className="loading-page"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1.5, delay: 3.5, ease: "easeInOut" }}
    >
      {/* Logo PNG dengan animasi */}
      <motion.div
        initial={{ opacity: 0, scale: 1.4 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="logo-container"
      >
        <img
          src="/src/assets/react.svg" // Pastikan path ini benar
          alt="Uji"
          className="img-fluid"
          style={{
            width: "200px", // Memperbesar gambar
            height: "auto", // Menjaga rasio aspek gambar
            marginBottom: "20px", // Memberikan jarak lebih besar dari teks
          }}
        />
      </motion.div>

      {/* Teks "Metabharata Official" */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-center pt-4"
      >
        <span style={{ fontSize: "2.5rem", fontWeight: "bold",color:"white" }}>Selamat Datang</span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingPage;
