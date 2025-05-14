import "../../styles/miniCart.css";
import { handleCheckout } from "../../scripts/handleCheckout";
import { useEffect, useState } from "react";

export default function MiniCart({ tickets, ticket, onClose, showMiniCart }) {

    function redirectToCart() {
        window.location.href = "/CartPage";
    } 

    function redirectToCheckout() {
        console.log(tickets)

        if (tickets.length === 0) return;

        const subtotal = tickets.reduce((acc, ticket) => acc + parseFloat(ticket.price), 0).toFixed(2);
        handleCheckout(tickets, subtotal);
    }

    return (
        <div className={`miniCartContainer ${showMiniCart ? 'fade-in' : ''}`}>
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