import { useState, useEffect } from 'react'
import Cart from '../components/Cart.jsx';
import TicketPage from '../components/TicketsPage/TicketPageComponent.astro';
import ticketsStorage from "./ticketsStorage.js";


export default function CartObject() {
    const [tickets, setTickets] = useState(ticketsStorage);

    return (
        <>
            <Cart tickets= { tickets } func={ setTickets } />
        </>
    )
}