function Home({ setPage }) {
  return (
    <div className="home-page">
      <div className="home-card">

        <h1>✈ IndiGo Airlines</h1>

        <h2>
          Welcome to India's Leading Airline
        </h2>

        <p>
          Book Flights • Select Seats • Generate Tickets
        </p>

        <button
          onClick={() => setPage("login")}
        >
          Login
        </button>

        <br />
        <br />

        <button
          onClick={() =>
            alert("Sign Up Module Coming Soon")
          }
        >
          Sign Up
        </button>

      </div>
    </div>
  );
}

export default Home;