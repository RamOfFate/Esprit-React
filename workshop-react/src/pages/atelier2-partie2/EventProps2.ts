export interface EventProps{
    name: string;
    description: string;
    img: string;
    price: number;
    nbTickets: number;
    nbParticipants: number;
    like: boolean;
}

export const EVENTS_DATA: EventProps[] = [
  {
    name: "GDC (Game Developers Conference)",
    description: "The world's largest professional game industry event, focusing on learning and networking.",
    img: "/gdc_2025_teaser.png",
    price: 899.99,
    nbTickets: 500,
    nbParticipants: 28000,
    like: true,
  },
  {
    name: "The Game Awards (TGA)",
    description: "An annual awards ceremony honoring achievements in the video game industry.",
    img: "/TGA-BlogHeader.png",
    price: 150.00,
    nbTickets: 1200,
    nbParticipants: 5000,
    like: false,
  },
  {
    name: "TwitchCon",
    description: "A celebration of all things streaming, bringing creators and fans together in one place.",
    img: "/twitchcon.jpg",
    price: 199.00,
    nbTickets: 3,
    nbParticipants: 35000,
    like: true,
  },
];