import React from "react";
import Cart from "./Cart";
import { ticketsStorage } from "./ticketsStorage";

function App() {
  const sampleTickets = [
    {
        name: "1 Day Ticket",
        price: 65.99,
        description: "This is a one-day access pass to all events.",
        src: "./src/images/ticket_image1.jpg",
    },
    {
        name: "3 Day Ticket",
        price: 109.99,
        description: "Three full days of access to the entire tournament.",
        src: "./src/images/ticket_image2.jpg",
    },
    {
        name: "Fan Zone Ticket",
        price: 309.99,
        description: "Fan Zone ticket is premium ticket to the entire tournament",
        src: "./src/images/ticket_image3.jpg",
    },
  ];

  return (
    <div>
      <Cart tickets={ticketsStorage} func={() => {}} />
    </div>
  );
}

export default App;