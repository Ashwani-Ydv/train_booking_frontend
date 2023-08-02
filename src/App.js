import React from "react";
import ReactDOM from "react-dom";
import Seats from "./components/Seats";
import BookSeats from "./components/BookSeats";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BookSeats />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
