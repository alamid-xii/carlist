import React, { useState } from "react";
import LandingPage from "./pages/user/LandingPage";
import CarListing from "./pages/user/listing";
import "./App.css";

function App() {
  const [page, setPage] = useState("landing");

  return (
    <div className="App">
      {page === "landing" ? (
        <LandingPage setPage={setPage} />
      ) : (
        <CarListing setPage={setPage} />
      )}
    </div>
  );
}

export default App;
