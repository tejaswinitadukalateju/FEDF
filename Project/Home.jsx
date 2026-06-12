import SeatGrid from "../components/SeatGrid";

function Home() {
  return (
    <div className="container">
      <h1>
        Smart Seat Selection System
      </h1>

      <p>
        Select your seats below
      </p>

      <SeatGrid />
    </div>
  );
}

export default Home;