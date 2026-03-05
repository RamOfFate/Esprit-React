import { Link, useParams } from "react-router-dom";
import { EVENTS_DATA } from "./EventProps2";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ticket, User } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function EventDetails() {
  const { eventName } = useParams();

  const event = EVENTS_DATA.find(
    (e) => e.name === decodeURIComponent(eventName || ""),
  );

  if (!event) {
    return <p>There was a problem fetching events</p>;
  }

  const [participants, setParticipants] = useState(event?.nbParticipants);
  const [tickets, setTickets] = useState(event?.nbTickets);
  const book = () => {
    if (tickets && tickets > 0) {
      setTickets((prev) => prev - 1);
      setParticipants((prev) => prev + 1);
    }
  };

  return (
    <div className="">
      <Button variant="ghost" asChild className="mb-4">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
        </Link>
      </Button>

      <div className="grid grid-cols-2 gap-8">
        <div className="aspect-video object-cover relative">
          <img
            src={event.img}
            alt={event.name}
            className="h-full aspect-video"
          />
          <Badge className="absolute top-2 left-2">{event.price}</Badge>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">{event.name}</h1>
          <p className="text-lg ">{event.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted flex flex-col items-center">
              <Ticket className="text-primary mb-2" />
              <span className="font-bold text-xl">{tickets} </span>
            </div>
            <div className="p-4 bg-muted flex flex-col items-center">
              <User className="text-primary mb-2" />
              <span className="font-bold text-xl">{participants}</span>
            </div>
          </div>

          <Button
            className={`w-full h-12 text-lg ${tickets === 0 ? "cursor-default" : ""}`}
            onClick={() => book()}
            variant={`${tickets === 0 ? "secondary" : "default"}`}
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
}
