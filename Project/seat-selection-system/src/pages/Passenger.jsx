import { useState } from "react";

function Passenger({
  setPage,
  travelData,
  setTravelData,
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !age ||
      !gender ||
      !phone
    ) {
      alert("Please fill all details");
      return;
    }

    if (phone.length !== 10) {
      alert(
        "Phone Number must contain exactly 10 digits"
      );
      return;
    }

    setTravelData({
      ...travelData,
      passengerName: name,
      passengerAge: age,
      passengerGender: gender,
      passengerPhone: phone,
    });

    setPage("booking");
  };

  return (
    <div className="login-page">
      <div className="travel-card">

        <h1 className="ticket-title">
          Passenger Details
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            className="big-select"
            type="text"
            placeholder="Passenger Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            className="big-select"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) =>
              setAge(e.target.value)
            }
          />

          <select
            className="big-select"
            value={gender}
            onChange={(e) =>
              setGender(e.target.value)
            }
          >
            <option value="">
              Select Gender
            </option>

            <option>
              Male
            </option>

            <option>
              Female
            </option>

            <option>
              Other
            </option>
          </select>

          <input
            className="big-select"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            maxLength="10"
            onChange={(e) => {
              const value =
                e.target.value.replace(
                  /\D/g,
                  ""
                );

              if (
                value.length <= 10
              ) {
                setPhone(value);
              }
            }}
          />

          <button type="submit">
            Continue To Seat Selection
          </button>

          <br />
          <br />

          <button
            type="button"
            onClick={() =>
              setPage("flights")
            }
          >
            ⬅ Back
          </button>

        </form>

      </div>
    </div>
  );
}

export default Passenger;