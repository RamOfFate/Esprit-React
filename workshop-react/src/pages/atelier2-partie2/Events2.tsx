import { Balloon } from "lucide-react";
import Event from "./Event2";
import { EVENTS_DATA } from "./EventProps2";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";

export default function Events() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 relative">
      {EVENTS_DATA.map((event, index) => {
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
          />
        );
      })}
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
