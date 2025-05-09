export class Ticket {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

export const ticketsStorage = [];

export const ticketsInformation = [
  {
    id: "buyTicket1",
    name: "1 Day Ticket",
    price: 65.99,
    description: "This is a one-day access pass to all events.",
    image: "/src/images/ticket_image1.jpg",
  },
  {
    id: "buyTicket2",
    name: "3 Day Ticket",
    price: 109.99,
    description: "Three full days of access to the entire tournament.",
    image: "/src/images/ticket_image2.jpg",
  },
  {
    id: "buyTicket3",
    name: "Fan Zone Ticket",
    price: 309.99,
    description: "Fan Zone ticket is premium ticket to the entire tournament",
    image: "/src/images/ticket_image3.jpg",
  },
];
