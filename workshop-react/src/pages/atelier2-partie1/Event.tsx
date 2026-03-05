import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { EventProps } from "./EventProps";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";

export default function Event({
  name,
  description,
  img,
  price,
  nbTickets,
  nbParticipants,
  like,
}: EventProps) {
  const [isLiked, setIsLiked] = useState(like);
  const [participants, setParticipants] = useState(nbParticipants);
  const [tickets, setTickets] = useState(nbTickets);
  const [showToast, setShowToast] = useState(false);
  const book = () => {
    if (tickets > 0) {
      setTickets((prev) => prev - 1);
      setParticipants((prev) => prev + 1);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };
  const toggleLike = () => {
    setIsLiked((prev) => !prev)
  }
  return(
  <div >
    <Card className="h-full">
      <img src={img} className="aspect-video" />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardAction>
          <Badge>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{description}</CardDescription>
        <ul>
          <li>Tickets: {tickets}</li>
          <li>Participants: {participants}</li>
        </ul>
      </CardContent>
      <CardFooter className="gap-4">
        <Button className={`flex-1`} onClick={toggleLike} variant={`${isLiked? "secondary" : "default"}`}>
            {isLiked? "Dislike" : "Like"}
        </Button>
        <Button onClick={() => book()} className={`flex-1 ${tickets === 0? "cursor-default" : ""}`} variant={`${tickets != 0 ? "default" : "secondary"}`}>
          Book
        </Button>
      </CardFooter>
    </Card>
    {showToast && (
        <div className="fixed bottom-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-4">
          <Alert >
            <CheckCircle2Icon />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Ticket for {name} booked successfully.
            </AlertDescription>
          </Alert>
        </div>
    )}
  </div>);
}
