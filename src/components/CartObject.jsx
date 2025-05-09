import { useEffect, useState } from "react";
import Cart from "./Cart";

export default function CartObject() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("ticketsStorage");
    if (stored) {
      console.log(JSON.parse(stored));
      setTickets(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <Cart tickets={tickets} func={setTickets} />
    </>
  );
}
