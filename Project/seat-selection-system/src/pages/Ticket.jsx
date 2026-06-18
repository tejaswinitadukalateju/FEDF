function Ticket({
  travelData,
  selectedSeats,
}) {

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
          🎫 IndiGo Boarding Pass
        </h1>

        <div className="ticket-row">
          <b>Passenger Name:</b>{" "}
          {travelData.passengerName}
        </div>

        <div className="ticket-row">
          <b>Age:</b>{" "}
          {travelData.passengerAge}
        </div>

        <div className="ticket-row">
          <b>Gender:</b>{" "}
          {travelData.passengerGender}
        </div>

        <div className="ticket-row">
          <b>Phone:</b>{" "}
          {travelData.passengerPhone}
        </div>

        <hr />

        <div className="ticket-row">
          <b>Airline:</b>{" "}
          IndiGo Airlines
        </div>

        <div className="ticket-row">
          <b>Flight Number:</b>{" "}
          {travelData.flightNo}
        </div>

        <div className="ticket-row">
          <b>Flight Time:</b>{" "}
          {travelData.flightTime}
        </div>

        <div className="ticket-row">
          <b>From:</b>{" "}
          {travelData.from}
        </div>

        <div className="ticket-row">
          <b>To:</b>{" "}
          {travelData.to}
        </div>

        <div className="ticket-row">
          <b>Date:</b>{" "}
          {travelData.date}
        </div>

        <div className="ticket-row">
          <b>Class:</b>{" "}
          {travelData.flightClass}
        </div>

        <div className="ticket-row">
          <b>Seats:</b>{" "}
          {selectedSeats.join(", ")}
        </div>

        <div className="ticket-row">
          <b>Total Fare:</b>{" "}
          ₹{total}
        </div>

        <div className="ticket-row">
          <b>Gate:</b>{" "}
          A12
        </div>

        <div className="ticket-row">
          <b>Status:</b>{" "}
          Confirmed ✅
        </div>

        <div className="ticket-row">
          <b>Boarding Time:</b>{" "}
          45 Minutes Before Departure
        </div>

        <h2 className="success">
          Thank You For Choosing
          IndiGo Airlines ✈
        </h2>

        <button
          onClick={() =>
            window.location.reload()
          }
        >
          Book Another Flight
        </button>

      </div>

    </div>
  );
}

export default Ticket;