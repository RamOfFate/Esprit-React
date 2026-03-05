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
import { Link } from "react-router-dom";
import { AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogAction, AlertDialog } from "@/components/ui/alert-dialog";

export default function Event({
  name,
  description,
  img,
  price,
  nbTickets,
  nbParticipants,
  like,
  id,
  onDelete
}: EventProps & { onDelete: () => void}) {
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
    setIsLiked((prev) => !prev);
  };
  
  return (
    <div>
      <Card className="h-full">
        <img src={img} className="aspect-video" />
        <CardHeader>
          <Link to={`/axios/ex1/${encodeURIComponent(name)}`}>
            <CardTitle className="hover:underline">{name}</CardTitle>
          </Link>
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
        <CardFooter>
          <div className="flex flex-col w-full gap-2">
            <div className="flex gap-2">
              <Button
                className={`w-1/2`}
                onClick={toggleLike}
                variant={`${isLiked ? "secondary" : "default"}`}
              >
                {isLiked ? "Dislike" : "Like"}
              </Button>
              <Button
                onClick={() => book()}
                className={`flex-1 ${tickets === 0 ? "cursor-default" : ""}`}
                variant={`${tickets != 0 ? "default" : "secondary"}`}
              >
                Book
              </Button>
            </div>
            <div className="flex gap-2  w-full">
                <Button  variant="secondary" className="w-1/2">
              <Link to={`edit/${id}`} className="w-full h-full grid items-center">
                  Update
              </Link>
                </Button>
<AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="flex-1" variant="destructive">Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the 
                      <strong> {name}</strong> event from the server.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    {/* When they confirm, we call the onDelete passed from Events.tsx */}
                    <AlertDialogAction 
                      onClick={onDelete} 
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>            </div>
          </div>
        </CardFooter>
      </Card>
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-4">
          <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Ticket for {name} booked successfully.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
