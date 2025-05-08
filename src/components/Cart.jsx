import { useEffect, useState } from "react";


export default function Cart( { tickets, func }) {

  return (
    <>
    <p>Hello</p>
      {Array.isArray(tickets) && tickets.map((ticket, index) => (
        <CartElement key={index} ticket={ticket} />
    ))}
    </>
  );
}

function CartElement({ ticket }) {
  return (
    <div className="cartElement">
      <div className="ticketCartImage">
        <img src={ticket.src} alt={ticket.name} />
      </div>
      <div className="ticketCartDescription">
        <p>{ticket.name}</p>
        <p>{ticket.description}</p>
        <p>{ticket.price}</p>
      </div>
    </div>
  );
}
