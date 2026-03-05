import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, ImagePlus } from "lucide-react";
import { addEvent } from "./service/api"; // Adjust path as needed
import type { EventProps } from "./EventProps";

export default function AddEvent() {
  const navigate = useNavigate();
  
  const [newEvent, setNewEvent] = useState<EventProps>({
    name: "",
    description: "",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4", 
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: name === "price" || name === "nbTickets" || name === "nbParticipants" 
        ? Number(value) 
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addEvent(newEvent);
      navigate("/axios/ex1");    
    } catch (error) {
      console.error("Error adding event:", error);
      alert("Failed to add event. Is the server running?");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <Card>
        <CardHeader >
          <CardTitle>Create New Event</CardTitle>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="name">Event Name</Label>
              <Input 
                id="name" name="name" placeholder="e.g. Gamescom 2026" 
                value={newEvent.name} onChange={handleChange} required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" name="description" placeholder="What is this event about?" 
                value={newEvent.description} onChange={handleChange} required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="img">Image URL</Label>
              <div className="flex gap-2">
                <Input 
                  id="img" name="img" placeholder="https://..." 
                  value={newEvent.img} onChange={handleChange} 
                />
                <div className="bg-muted p-2 rounded border flex items-center">
                  <ImagePlus className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input 
                  id="price" name="price" type="number" 
                  value={newEvent.price} onChange={handleChange} required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nbTickets">Total Tickets</Label>
                <Input 
                  id="nbTickets" name="nbTickets" type="number" 
                  value={newEvent.nbTickets} onChange={handleChange} required 
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 mb-8">
              <div className="space-y-0.5">
                <Label>Featured Event</Label>
                <p className="text-xs text-muted-foreground">Mark this event as liked by default.</p>
              </div>
              <Switch 
                checked={newEvent.like} 
                onCheckedChange={(checked) => setNewEvent(prev => ({ ...prev, like: checked }))} 
              />
            </div>
          </CardContent>

          <CardFooter className="bg-muted/30 rounded-b-xl flex justify-end gap-2 p-6">
            <Button type="button" variant="outline" onClick={() => navigate("/")}>Cancel</Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" /> Save Event
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}