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
    tagID : "ticket1",
    price: 65.99,
    description: "This is a one-day access pass to all events.",
    image: "/src/images/ticket_image1.jpg",
    features: [
      {
        title: "Seating in the Upper Ring",
        description: "Enjoy a panoramic view of the entire tournament arena from the upper ring, providing a comprehensive perspective of the action-packed CS2 matches and strategies from a comfortable and elevated position."
      },
      {
        title: "DH Festival Ticket",
        description: "Experience the excitement of the DH Festival with this ticket, granting you access to an array of gaming-related events, interactive experiences, and exclusive behind-the-scenes content from the world of CS2 esports."
      },
      {
        title: "Access to CGT Fan Zone",
        description: "Step into the CGT Fan Zone, an exclusive area where fans can engage with CS2 content, meet fellow esports enthusiasts, participate in activities, and interact with your favorite teams and players in a fun, immersive environment."
      }
    ]
  },
  {
    id: "buyTicket2",
    name: "3 Day Ticket",
    tagID : "ticket2",
    price: 109.99,
    description: "Three full days of access to the entire tournament.",
    image: "/src/images/ticket_image2.jpg",
    features: [
      {
        title: "Seating in the Infield",
        description: "Get closer to the action with premium infield seating, offering an immersive view of the tournament and players."
      },
      {
        title: "DH Festival Ticket",
        description: "Full three-day access to all DH Festival activities, workshops, and special events throughout the tournament weekend."
      },
      {
        title: "Access to CGT Fan Zone",
        description: "Enjoy unlimited access to the CGT Fan Zone with special priority entry and exclusive three-day attendee perks."
      }
    ]
  },
  {
    id: "buyTicket3",
    name: "Fan Zone Ticket",
    tagID : "ticket3",
    price: 309.99,
    description: "Fan Zone ticket is premium ticket to the entire tournament",
    image: "/src/images/ticket_image3.jpg",
    features: [
      {
        title: "Free Beverages",
        description: "Complimentary drinks throughout the event, including premium beverages at designated Fan Zone bars."
      },
      {
        title: "Close arena view",
        description: "Experience the tournament from the best seats in the house, with unobstructed views just meters away from the players."
      },
      {
        title: "Free autograph sessions",
        description: "Exclusive access to private autograph sessions with players and teams, plus photo opportunities not available to regular ticket holders."
      }
    ]
  }
];
