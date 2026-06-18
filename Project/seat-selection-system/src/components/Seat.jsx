import { useContext } from "react";
import { SeatContext } from "../context/SeatContext";

function Seat({ seatNo }) {
  const { selectedSeats, toggleSeat } =
    useContext(SeatContext);

  const selected =
    selectedSeats.includes(seatNo);

  return (
    <button
      className={
        selected ? "seat selected" : "seat"
      }
      onClick={() => toggleSeat(seatNo)}
    >
      {seatNo}
    </button>
  );
}

export default Seat;