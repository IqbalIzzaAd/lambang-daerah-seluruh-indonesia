import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoadingPage from "./pages/LoadingPage";
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
          <App />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
