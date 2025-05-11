import "../../styles/miniCart.css";
import { ticketsStorage } from "../../scripts/ticketsStorage";
import { useEffect, useState } from "react";

export default function MiniCart({ ticket, onClose }) {
    const [tickets, setTickets] = useState([]);
    
    useEffect(() => {
    const stored = localStorage.getItem("ticketsStorage");
    if (stored) {
        setTickets(JSON.parse(stored));
    }
    }, []);

    function redirectToCart() {
        window.location.href = "/CartPage";
    } 

    function redirectToCheckout() {

    }

    return (
        <div className="miniCartContainer">
            <div className="upperContainer">
                <div className="checkMarkContainer">
                    <img src="/src/images/checkMark.png" alt="checkmark" id="checkmark"/>
                    <p>Added to Bag</p>
                </div>
                <button className="closeBtn" onClick={onClose}>×</button>
            </div>

            <div className="miniCartDescriptionContainer">
                <div id="miniCartImageContainer">
                    <img src={ticket.src} alt={ticket.name} />
                </div>

                <div id="miniCartDescription">
                    <p>{ticket.name}</p>
                    <p>{ticket.description}</p>
                    <p>€{ticket.price}</p>
                </div>
            </div>

            <div className="buttonsContainer">
                <button id="redirectToCartButton" onClick={redirectToCart}>View Bag ({tickets.length})</button>
                <button id="redirectToCheckoutButton" onClick={redirectToCheckout}>Checkout</button>
            </div>
        </div>
    )
}