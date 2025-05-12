import { useEffect, useState } from "react";
import Cart from "./Cart";
import { Ticket } from "../../scripts/ticketsStorage.js";


export default function CartObject() {
  const [tickets, setTickets] = useState([]);

  function deleteTicket(type) {
    setTickets(prevTickets => {
      const index = prevTickets.findIndex(ticket => ticket.name === type);

      const updatedTickets = [...prevTickets];
      updatedTickets.splice(index, 1)
      console.log("Ticket deleted", updatedTickets);
      localStorage.setItem("ticketsStorage", JSON.stringify(updatedTickets));
      console.log("Saved successfully");

      return updatedTickets;
    });
  }

  function addTicket(ticket) {
    setTickets(prevTickets => {
      const newTicket = new Ticket(ticket.name, ticket.price, ticket.description, ticket.src);

      const updatedTickets = [...prevTickets];
      updatedTickets.push(newTicket);

      localStorage.setItem("ticketsStorage", JSON.stringify(updatedTickets));
      console.log("Saved successfully");
      return updatedTickets;
    });
  }

  useEffect(() => {
    const stored = localStorage.getItem("ticketsStorage");
    if (stored) {
      console.log(JSON.parse(stored));
      setTickets(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <Cart tickets={tickets} deleteTicket={deleteTicket} addTicket={addTicket}/>
    </>
  );
}
