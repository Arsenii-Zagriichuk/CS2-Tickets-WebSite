import { useEffect, useState } from "react";
import "../../styles/cart.css";

function Cart({ tickets, deleteTicket, addTicket }) {
  const hasItems = tickets && tickets.length > 0;

  const ticketsType1 = tickets.filter(ticket => ticket.name === "1 Day Ticket");
  const ticketsType2 = tickets.filter(ticket => ticket.name === "3 Day Ticket");
  const ticketsType3 = tickets.filter(ticket => ticket.name === "Fan Zone Ticket");

  const allTypes = [ticketsType1, ticketsType2, ticketsType3];

  return (
    <div className="cartContainer">
      <div className="cartElementsContainer">
        <h1>Basket</h1>
        {hasItems ? (
          allTypes.map((typeGroup, index) =>
            typeGroup.length > 0 ? (
              <CartElement
                key={index}
                ticket={typeGroup[0]}
                quantity={typeGroup.length}
                deleteTicket={deleteTicket}
                addTicket={addTicket}
                showQuantity={true}
              />
            ) : null
          )
        ) : (
          <p>There are no items in your bag.</p>
        )}
      </div>

      <PaymentSection tickets={tickets} />
    </div>
  );
}


function CartElement({ ticket, quantity, deleteTicket, addTicket, showQuantity }) {
  return (
    <>
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
    { showQuantity &&
        <div className="quantityContainer">
          {quantity <= 1 ? 
              <button onClick={() => deleteTicket(ticket.name)}><i className="fa-regular fa-trash-can"></i></button>
            : 
              <button onClick={() => deleteTicket(ticket.name)}><i className="fa-solid fa-minus"></i></button>
          }
          <p>{quantity}</p>
          <button onClick={() => addTicket(ticket)}><i className="fa-solid fa-plus"></i></button>
        </div>
    }

    { !showQuantity && 
      <div className="quantityNumberContainer">
        <p>Quantity: {quantity}</p>
      </div>
    }
    
    </>
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
  
  // Function to handle checkout click
  const handleCheckout = () => {
    if (parseFloat(totalPrice) === 0) return;
    // Store the cart data in localStorage before navigating
    localStorage.setItem("checkoutData", JSON.stringify({
      tickets: tickets,
      subtotal: totalPrice,
      taxFee: taxFee.toFixed(2),
      total: finalTotal
    }));
    
    // Navigate to the Checkout page
    window.location.href = "/Checkout";
  };

  const isDisabled = parseFloat(totalPrice) === 0;

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
      <div
        className={`checkoutButton ${!isDisabled ? '' : 'disabled'}`}
        onClick={handleCheckout}
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        onKeyDown={(e) => {
          if (!isDisabled && (e.key === 'Enter' || e.key === ' ')) {
            handleCheckout();
          }
        }}
        aria-disabled={isDisabled}
      >
        Checkout
      </div>
    </div>
  );
}

function SuccessfulPaymenPageContent(){
  const [tickets, setTickets] = useState([]);

  const ticketsType1 = tickets.filter(ticket => ticket.name === "1 Day Ticket");
  const ticketsType2 = tickets.filter(ticket => ticket.name === "3 Day Ticket");
  const ticketsType3 = tickets.filter(ticket => ticket.name === "Fan Zone Ticket");

  const allTypes = [ticketsType1, ticketsType2, ticketsType3];

  useEffect(() => {
    const stored = localStorage.getItem("ticketsStorage");
    if (stored) {
      setTickets(JSON.parse(stored));
    }
  }, []);

  return(
    <div>
      <div className="sucessElements"></div>
      {
          allTypes.map((typeGroup, index) =>
            typeGroup.length > 0 ? (
              <CartElement
                key={index}
                ticket={typeGroup[0]}
                quantity={typeGroup.length}
                deleteTicket={null}
                addTicket={null}
                showQuantity={false}
              />
            ) : null
          )
        }
    </div>
  );
};


export { SuccessfulPaymenPageContent };
export default Cart;