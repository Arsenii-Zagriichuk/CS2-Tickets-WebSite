import { ticketsInformation } from "../../scripts/ticketsStorage.js";
import { Ticket, ticketsStorage } from "../../scripts/ticketsStorage.js";
import "/src/styles/ticketsPage.css";
import { useState, useEffect } from "react";
import MiniCart from "./MiniCart.jsx";

function TicketComponent({ name, price, image, tagID, onClick }) {
    return (
        <div className="ticketImage" onClick={() => onClick(tagID)}>
            <div className="ticketWrapper">
                <img src={image} alt={name} />
                <div className="moreInfo">More Info</div>
            </div>
            <p className="ticketName">{name}</p>
            <p className="ticketPrice">${price}</p>
        </div>
    );
}

function TicketDescription({ ticket, isActive, isClosing, onClose, onTicketAdd }) {
    const { name, description, features, tagID } = ticket;

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape" && isActive && !isClosing) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [isActive, isClosing, onClose]);

    function handleSave() {
        console.log(JSON.parse(localStorage.getItem("ticketsStorage")));
        localStorage.setItem("ticketsStorage", JSON.stringify(ticketsStorage));
        console.log("Saved successfully");
    }

    function quantityIcon() {
        const stored = JSON.parse(localStorage.getItem("ticketsStorage"));
        const quantityElement = document.querySelector("#quantity");

        if (stored && stored.length > 0) {
            quantityElement.textContent = stored.length;
            quantityElement.style.opacity = "1";
        } else {
            quantityElement.textContent = "";
            quantityElement.style.opacity = "0";
        }
    }

    function addNewTicket() {
        const savedTickets = JSON.parse(localStorage.getItem("ticketsStorage")) || [];
        ticketsStorage.length = 0;
        ticketsStorage.push(...savedTickets);
        const newTicket = new Ticket(ticket.name, ticket.price, ticket.description, ticket.image);
        ticketsStorage.push(newTicket);
        handleSave();
        quantityIcon();

        onTicketAdd(newTicket);

        onClose();
    }

    return (
        <div
            className={`ticketDescription ${isActive ? "active" : ""} ${isClosing ? "closing" : ""}`}
            id={"desc-" + tagID}
        >
            <button className="closePopup" onClick={onClose}>
                <i className="fas fa-times"></i>
            </button>
            <div className="popupContent">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>It includes:</p>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>
                            <span className="ticketBold">{feature.title}</span>
                            <p>{feature.description}</p>
                        </li>
                    ))}
                </ul>
                <button className="buyTicket" id={"buy" + tagID} onClick={addNewTicket}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default function Tickets() {
    const [selectedTicketId, setSelectedTicketId] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const [lastAddedTicket, setLastAddedTicket] = useState(null);
    const [showMiniCart, setShowMiniCart] = useState(false);

    const handleTicketClick = (tagID) => {
        setSelectedTicketId(tagID);
        setIsClosing(false);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedTicketId(null);
            setIsClosing(false);
        }, 400); 
    };

    function handleTicketAdded(ticket) {
        setLastAddedTicket(ticket);
        setShowMiniCart(true);
    }

    
    useEffect(() => {
        
        const cleanup = () => {
            document.querySelectorAll(".ticketDescription").forEach(popup => {
               
                popup.classList.remove("inactive", "closing");
            });
        };
        
        cleanup();
        return cleanup;
    }, []);

    const selectedTicket = ticketsInformation.find(
        (ticket) => ticket.tagID === selectedTicketId
    );

    return (
        <>
            <div className="ticketImages">
                {ticketsInformation.map((ticket, index) => (
                    <TicketComponent
                        key={index}
                        name={ticket.name}
                        price={ticket.price}
                        image={ticket.image}
                        tagID={ticket.tagID}
                        onClick={handleTicketClick}
                    />
                ))}
            </div>

            {selectedTicket && (
                <TicketDescription
                    ticket={selectedTicket}
                    isActive={!isClosing}
                    isClosing={isClosing}
                    onClose={handleClose}
                    onTicketAdd={handleTicketAdded}
                />
            )}

             {showMiniCart && (
                <MiniCart ticket={lastAddedTicket} onClose={() => setShowMiniCart(false)} />
            )}

        </>
    );
}
