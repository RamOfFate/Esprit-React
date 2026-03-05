import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ticket, User, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import type { EventProps } from "./EventProps";
import { getallEvents } from "./service/api";

export default function EventDetailsAxios() {
  const { eventName } = useParams();

  const [event, setEvent] = useState<EventProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [participants, setParticipants] = useState(0);
  const [tickets, setTickets] = useState(0);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        setLoading(true);
        const response = await getallEvents(eventName || "");
        
        const data = Array.isArray(response.data) ? response.data[0] : response.data;

        if (data) {
          setEvent(data);
          setParticipants(data.nbParticipants);
          setTickets(data.nbTickets);
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [eventName]);

  const book = () => {
    if (tickets > 0) {
      setTickets((prev) => prev - 1);
      setParticipants((prev) => prev + 1);
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl font-bold text-red-500 underline decoration-wavy">
          Event "{eventName}" not found in our records.
        </p>
        <Button asChild className="mt-4" variant="outline">
          <Link to="/">Go Back Home</Link>
        </Button>
      </div>
    );
  }

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