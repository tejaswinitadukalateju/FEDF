import Seat from "./Seat";

function SeatGrid() {
  const seats = [];

  for (let i = 1; i <= 40; i++) {
    seats.push(
      <Seat
        key={i}
        seatNo={`S${i}`}
      />
    );
  }

  return (
    <div className="grid">
      {seats}
    </div>
  );
}

export default SeatGrid;