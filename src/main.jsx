import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import LoadingPage from "./pages/LoadingPage";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";


const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Waktu loading 3.5 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
