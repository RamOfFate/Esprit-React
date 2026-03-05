import { Balloon, Loader2, Plus } from "lucide-react";
import Event from "./Event";
import { type EventProps } from "./EventProps";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { deleteEvent, getallEvents } from "./service/api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Events() {
  const [showWelcome, setShowWelcome] = useState(true);

  const [events, setEvents] = useState<EventProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await getallEvents("");
        setEvents(response.data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();

    return () => clearTimeout(timer);
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteEvent(id);
      setEvents((prev) => prev.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  
};
  return (
    <div className="">
      <div className="flex mb-4 justify-end">
        <Link to="add" >
        <Button className="">
          <Plus/> New
        </Button>
        </Link>
        </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {events.length > 0 ? (
            events.map((event, index) => {
              return (
                <Event
                  key={index}
                  name={event.name}
                  description={event.description}
                  img={event.img}
                  price={event.price}
                  nbTickets={event.nbTickets}
                  nbParticipants={event.nbParticipants}
                  like={event.like}
                  id={event.id}
                  onDelete={() => handleDelete(event.id!)}
                />
              );
            })
          ) : (
            <p className="col-span-3 text-center py-10 text-muted-foreground">
              No events found. Start by adding one!
            </p>
          )}
        </div>
      )}
      {showWelcome && (
        <Alert className="absolute -top-16 left-0 z-50 animate-in fade-in slide-in-from-top-2">
          <Balloon />
          <AlertTitle>Welcome</AlertTitle>
          <AlertDescription>Hey welcome to Esprit events!</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
