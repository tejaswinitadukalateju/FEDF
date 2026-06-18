import { createContext, useState } from "react";

export const SeatContext = createContext();

export const SeatProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <SeatContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        selectedSeats,
        toggleSeat
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};