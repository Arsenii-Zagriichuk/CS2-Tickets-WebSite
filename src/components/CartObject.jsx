import { useState, useEffect } from 'react'
import Cart from '../components/Cart.jsx';
import TicketPage from '../components/ticket_Page_Component.astro'
import ticketsStorage from "./ticketsStorage.js";


export default function CartObject() {
    const [tickets, setTickets] = useState(ticketsStorage);

    return (
        <>
            <Cart tickets= { tickets } func={ setTickets } />
        </>
    )
}