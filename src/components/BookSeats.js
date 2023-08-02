// BookSeats.js
import React, { useState, useEffect } from "react";
import Seat from "./Seats";
import axios from "axios";
import "./Seats.css";

function BookSeats() {
  const [Seats, setSeats] = useState([]);
  const [numSeatsToBook, setNumSeatsToBook] = useState();

  useEffect(() => {
    axios
      .get("https://ticket-booking-service.onrender.com/seats")
      .then((response) => {
        setSeats(response.data);
      });
  }, []);

  console.log("Seat", Seats);

  const handleSeatClick = () => {
    let url = `${"https://ticket-booking-service.onrender.com/seats"}/book/${numSeatsToBook}`;
    axios.post(url).then((response) => {
      setSeats(response.data);
    });
    console.log("dshfgadk", numSeatsToBook);
  };
  return (
    <div className="seat-booking-app">
      <h1>Train Seat Booking</h1>
      <div>
        <label>Number of Seats to Book:</label>
        <input
          className="seat-input"
          type="number"
          onChange={(e) => {
            setNumSeatsToBook(e.target.value); //e.target.value=>whatever you write in input
          }}
          min="1"
          max="7"
        />
        <button className="book-seat-btn" onClick={handleSeatClick}>
          Book Seats
        </button>
      </div>
      <div className="seat-grid">
        {Seats.map((seat) => (
          <Seat key={seat.id} seat={seat} />
        ))}
      </div>
    </div>
  );
}

export default BookSeats;
