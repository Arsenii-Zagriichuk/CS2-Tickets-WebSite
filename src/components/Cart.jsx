import { useEffect, useState } from "react";
import "../styles/test.css";

export default function Cart( { tickets, func }) {

  return (
    <div className="cartContainer">
    <h1>Bag</h1>
      {tickets && tickets.map((ticket, index) => (
        <CartElement key={index} ticket={ticket} />
    ))}
    </div>
  );
}

function CartElement({ ticket }) {
  return (
    <div className="cartElement">
      <div className="ticketCartImage">
        <img src={ticket.src} alt={ticket.name} />
      </div>
      <div className="ticketCartDescription">
        <div>
          <p className="important">{ticket.name}</p>
          <p className="description">{ticket.description}</p>
        </div>

        <div>
          <p className="important">${ticket.price}</p>
        </div>
      </div>
    </div>
  );
}
