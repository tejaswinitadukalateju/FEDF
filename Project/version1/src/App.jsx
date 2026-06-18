import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  const [page, setPage] = useState("home");

  const [travelData, setTravelData] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <>
      {page === "home" && (
        <Home setPage={setPage} />
      )}

      {page === "login" && (
        <Login setPage={setPage} />
      )}

      
    </>
  );
}

export default App;