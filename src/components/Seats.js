// Seat.js
import React from "react";
import "./Seats.css";

const Seat = ({ seat, onSeatClick }) => {
  const seatStatusColor = seat.status === "booked" ? "red" : "green";

  return (
    <div className={`seat ${seat.status}`}>
      <span className="seat-icon"></span>
      <span className="seat-label">{`R ${seat.row},  ${seat.seat}`}</span>
    </div>
  );
};

export default Seat;
