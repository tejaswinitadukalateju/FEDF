function Booking({
  travelData,
  selectedSeats,
  setSelectedSeats,
  setPage,
}) {

  const seats = [];

  for (let i = 1; i <= 10; i++) {
    seats.push([
      `A${i}`,
      `B${i}`,
      `C${i}`,
      `D${i}`,
      `E${i}`,
      `F${i}`,
    ]);
  }

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter(
          (s) => s !== seat
        )
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat,
      ]);
    }
  };

  let multiplier = 1;

  if (
    travelData.flightClass ===
    "Premium Economy"
  )
    multiplier = 1.5;

  if (
    travelData.flightClass ===
    "Business"
  )
    multiplier = 2;

  if (
    travelData.flightClass ===
    "First Class"
  )
    multiplier = 3;

  const total =
    selectedSeats.length *
    travelData.flightPrice *
    multiplier;

  return (
    <div className="login-page">
      <div className="ticket-card">

        <h1 className="ticket-title">
          ✈ IndiGo Seat Selection
        </h1>

        <h3>
          {travelData.from}
          {" ➜ "}
          {travelData.to}
        </h3>

        <h4>
          Flight:
          {" "}
          {travelData.flightNo}
        </h4>

        <h4>
          Time:
          {" "}
          {travelData.flightTime}
        </h4>

        <h4>
          Class:
          {" "}
          {travelData.flightClass}
        </h4>

        <h4>
          Window Seats:
          A & F
        </h4>

        <br />

        {seats.map((row, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >

            <button
              className={
                selectedSeats.includes(row[0])
                  ? "selected-seat"
                  : "seat-btn"
              }
              onClick={() =>
                toggleSeat(row[0])
              }
            >
              {row[0]}
            </button>

            <button
              className={
                selectedSeats.includes(row[1])
                  ? "selected-seat"
                  : "seat-btn"
              }
              onClick={() =>
                toggleSeat(row[1])
              }
            >
              {row[1]}
            </button>

            <button
              className={
                selectedSeats.includes(row[2])
                  ? "selected-seat"
                  : "seat-btn"
              }
              onClick={() =>
                toggleSeat(row[2])
              }
            >
              {row[2]}
            </button>

            <div
              style={{
                width: "60px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              ✈
            </div>

            <button
              className={
                selectedSeats.includes(row[3])
                  ? "selected-seat"
                  : "seat-btn"
              }
              onClick={() =>
                toggleSeat(row[3])
              }
            >
              {row[3]}
            </button>

            <button
              className={
                selectedSeats.includes(row[4])
                  ? "selected-seat"
                  : "seat-btn"
              }
              onClick={() =>
                toggleSeat(row[4])
              }
            >
              {row[4]}
            </button>

            <button
              className={
                selectedSeats.includes(row[5])
                  ? "selected-seat"
                  : "seat-btn"
              }
              onClick={() =>
                toggleSeat(row[5])
              }
            >
              {row[5]}
            </button>

          </div>
        ))}

        <br />

        <h3>
          Seats:
          {" "}
          {selectedSeats.join(", ")}
        </h3>

        <h2>
          Total Fare:
          {" "}
          ₹{total}
        </h2>

        <button
          onClick={() =>
            setPage("ticket")
          }
        >
          Confirm Booking
        </button>

        <br />
        <br />

        <button
          onClick={() =>
            setPage("travel")
          }
        >
          ⬅ Back
        </button>

      </div>
    </div>
  );
}

export default Booking;