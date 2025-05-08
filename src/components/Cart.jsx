import { useEffect } from "react";
import { useState } from "react";
import ticketsStorage from "./ticketsStorage";


export default function Cart() {
    const [ tickets, setTickets ] = useState(ticketsStorage);


    useEffect(() => {
        setTickets(tickets)
    }, [ tickets ])

    return (
        <>
            {tickets.map(ticket => {
                <p>{ticket.name}</p>
            })}
        </>
    )
}