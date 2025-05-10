import { useEffect, useState } from "react";
import "../styles/test.css";

export default function Cart({ tickets, func }) {
  const hasItems = tickets && tickets.length > 0;

  return (
    <div className="cartContainer">
      <div className="cartElementsContainer">
        <h1>Bag</h1>
        {hasItems && 
          tickets.map((ticket, index) => (
            <CartElement key={index} ticket={ticket} />
          ))
        }
      </div>
      
      {/* Only render PaymentSection if there are items */}
      {hasItems && <PaymentSection tickets={tickets} />}
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

function PaymentSection({ tickets }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const taxFee = 5.00; // Fixed tax fee of $5
  
  useEffect(() => {
    if (tickets && tickets.length > 0) {
      const calculatedTotal = tickets.reduce((acc, ticket) => acc + parseFloat(ticket.price), 0);
      setTotalPrice(calculatedTotal.toFixed(2));
    } else {
      setTotalPrice(0);
    }
  }, [tickets]);

  // Calculate final total with tax
  const finalTotal = (parseFloat(totalPrice) + taxFee).toFixed(2);

  return(
    <div className="paymentSection">
      <h2>Summary</h2>
      <div className="priceSummary">
        <p>Subtotal:</p>
        <p>${totalPrice}</p>
      </div>
      <div className="priceSummary">
        <p>Tax Fee:</p>
        <p>${taxFee.toFixed(2)}</p>
      </div>
      <div className="priceSummary totalRow">
        <p>Total:</p>
        <p>${finalTotal}</p>
      </div>
      <button className="checkoutButton">Checkout</button>
    </div>
  );
}
