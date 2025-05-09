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
