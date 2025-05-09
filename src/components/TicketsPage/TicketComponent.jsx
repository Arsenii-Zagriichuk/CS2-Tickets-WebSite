import { ticketsInformation } from "../ticketsStorage.js";
import "/src/styles/ticketsPage.css";
import { useState } from "react";

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

function TicketDescription({ ticket, isActive, isClosing, onClose }) {
    const { name, description, features, tagID } = ticket;

    const tickets = document.querySelectorAll(".ticketImage");
    const closeButtons = document.querySelectorAll(".closePopup");

    document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        document.querySelectorAll(".ticketDescription.active").forEach((popUp) => {
        if (popUp.classList.contains("closing")) return;

        popUp.classList.add("closing");
        popUp.classList.add("inactive");

        popUp.addEventListener(
            "animationend",
            () => {
            popUp.classList.remove("active", "inactive", "closing");
            },
            { once: true }
        );
        });
    }
    });

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
                <button className="buyTicket" id={"buy" + tagID}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default function Tickets() {
    const [selectedTicketId, setSelectedTicketId] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

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
                />
            )}
        </>
    );
}
