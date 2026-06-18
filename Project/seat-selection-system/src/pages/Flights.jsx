function Flights({
  setPage,
  travelData,
  setTravelData,
}) {
  const flights = [
    {
      flightNo: "6E101",
      time: "06:00 AM",
      price: 3500,
    },
    {
      flightNo: "6E205",
      time: "10:30 AM",
      price: 4500,
    },
    {
      flightNo: "6E310",
      time: "02:00 PM",
      price: 5500,
    },
    {
      flightNo: "6E415",
      time: "06:45 PM",
      price: 6500,
    },
    {
      flightNo: "6E520",
      time: "10:15 PM",
      price: 7500,
    },
  ];

  const selectFlight = (flight) => {
    setTravelData({
      ...travelData,
      flightNo: flight.flightNo,
      flightTime: flight.time,
      flightPrice: flight.price,
    });

    setPage("passenger");
  };

  return (
    <div className="login-page">
      <div className="travel-card">

        <h1 className="ticket-title">
          ✈ Available IndiGo Flights
        </h1>

        <h3>
          {travelData.from} ➜ {travelData.to}
        </h3>

        <h4>Date: {travelData.date}</h4>
        <h4>Class: {travelData.flightClass}</h4>

        <br />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {flights.map((flight) => (
            <div
              key={flight.flightNo}
              style={{
                border: "1px solid #ccc",
                borderRadius: "15px",
                padding: "20px",
                background: "#f8fafc",
                boxShadow:
                  "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2>
                ✈ IndiGo {flight.flightNo}
              </h2>

              <p>
                🕒 Departure:
                {" "}
                {flight.time}
              </p>

              <p>
                💰 Fare:
                {" "}
                ₹{flight.price}
              </p>

              <button
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
                onClick={() =>
                  selectFlight(flight)
                }
              >
                Select Flight
              </button>
            </div>
          ))}
        </div>

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

export default Flights;