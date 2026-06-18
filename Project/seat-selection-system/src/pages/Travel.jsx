import { useState } from "react";

function Travel({ setPage, setTravelData }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [flightClass, setFlightClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!from || !to || !date || !flightClass) {
      alert("Please fill all details");
      return;
    }

    if (from === to) {
      alert("Departure and Destination cannot be same");
      return;
    }

    setTravelData({
      from,
      to,
      date,
      flightClass,
    });

    setPage("flights");
  };

  return (
    <div className="login-page">
      <div className="travel-card">

        <h1 className="ticket-title">
          ✈ IndiGo Airlines Reservation
        </h1>

        <form onSubmit={handleSubmit}>

          <select
            className="big-select"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value="">Select Departure City</option>

            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Kolkata</option>
            <option>Pune</option>
            <option>Ahmedabad</option>
            <option>Jaipur</option>
            <option>Lucknow</option>
            <option>Visakhapatnam</option>
            <option>Vijayawada</option>
            <option>Kochi</option>
            <option>Goa</option>
            <option>Patna</option>
            <option>Bhubaneswar</option>
            <option>Nagpur</option>
            <option>Indore</option>
            <option>Chandigarh</option>
            <option>Srinagar</option>
            <option>Amritsar</option>
            <option>Mysore</option>
            <option>Coimbatore</option>
            <option>Varanasi</option>
            <option>Surat</option>
            <option>Tirupati</option>
            <option>Warangal</option>
            <option>Madurai</option>
            <option>Ranchi</option>
          </select>

          <select
            className="big-select"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="">Select Destination City</option>

            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Kolkata</option>
            <option>Pune</option>
            <option>Ahmedabad</option>
            <option>Jaipur</option>
            <option>Lucknow</option>
            <option>Visakhapatnam</option>
            <option>Vijayawada</option>
            <option>Kochi</option>
            <option>Goa</option>
            <option>Patna</option>
            <option>Bhubaneswar</option>
            <option>Nagpur</option>
            <option>Indore</option>
            <option>Chandigarh</option>
            <option>Srinagar</option>
            <option>Amritsar</option>
            <option>Mysore</option>
            <option>Coimbatore</option>
            <option>Varanasi</option>
            <option>Surat</option>
            <option>Tirupati</option>
            <option>Warangal</option>
            <option>Madurai</option>
            <option>Ranchi</option>
          </select>

          <input
            className="big-select"
            type="date"
            value={date}
            min="2026-01-01"
            max="2035-12-31"
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            className="big-select"
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
          >
            <option value="">Select Class</option>
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>

          <button type="submit">
            Search Flights
          </button>

          <br />
          <br />

          <button
            type="button"
            onClick={() => setPage("login")}
          >
            ⬅ Back
          </button>

        </form>
      </div>
    </div>
  );
}

export default Travel;