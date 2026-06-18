import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Travel from "./pages/Travel";
import Flights from "./pages/Flights";
import Passenger from "./pages/Passenger";
import Booking from "./pages/Booking";
import Ticket from "./pages/Ticket";

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

      {page === "travel" && (
        <Travel
          setPage={setPage}
          setTravelData={setTravelData}
        />
      )}

      {page === "flights" && (
        <Flights
          setPage={setPage}
          travelData={travelData}
          setTravelData={setTravelData}
        />
      )}

      {page === "passenger" && (
        <Passenger
          setPage={setPage}
          travelData={travelData}
          setTravelData={setTravelData}
        />
      )}

      {page === "booking" && (
        <Booking
          travelData={travelData}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          setPage={setPage}
        />
      )}

      {page === "ticket" && (
        <Ticket
          travelData={travelData}
          selectedSeats={selectedSeats}
        />
      )}
    </>
  );
}

export default App;