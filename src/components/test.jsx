import React from "react";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import { ticketsStorage } from "./ticketsStorage";

function App() {
  const [tickets, setTickets] = useState(ticketsStorage);

  useEffect(() => {
      const stored = localStorage.getItem("ticketsStorage");
      if (stored) {
        console.log(JSON.parse(stored));
        setTickets(JSON.parse(stored));
      }
    }, []);

  return (
    <div>
      <Cart tickets={tickets} func={() => {}} />
    </div>
  );
}

export default App;