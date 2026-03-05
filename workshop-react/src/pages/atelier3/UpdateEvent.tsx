import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, ImagePlus, Loader2 } from "lucide-react";
import { editEvent } from "./service/api"; 
import type { EventProps } from "./EventProps";
import axios from "axios";

export default function UpdateEvent() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<EventProps>({
    name: "",
    description: "",
    img: "", 
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
    id: ""
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/events/${id}`);
        if (response.data) {
          setFormData(response.data);
        }
      } catch (error) {
        console.error("Error fetching event for update:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchEvent();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["price", "nbTickets", "nbParticipants"].includes(name) 
        ? Number(value) 
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await editEvent(id, formData);
        navigate("/axios/ex1"); 
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update event. Is the server running?");
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Update Event</CardTitle>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="name">Event Name</Label>
              <Input 
                id="name" name="name" 
                value={formData.name} onChange={handleChange} required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" name="description" 
                value={formData.description} onChange={handleChange} required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="img">Image URL</Label>
              <div className="flex gap-2">
                <Input 
                  id="img" name="img" 
                  value={formData.img} onChange={handleChange} 
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
                  value={formData.price} onChange={handleChange} required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nbTickets">Total Tickets</Label>
                <Input 
                  id="nbTickets" name="nbTickets" type="number" 
                  value={formData.nbTickets} onChange={handleChange} required 
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 mb-8">
              <div className="space-y-0.5">
                <Label>Featured Event</Label>
              </div>
              <Switch 
                checked={formData.like} 
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, like: checked }))} 
              />
            </div>
          </CardContent>

          <CardFooter className="bg-muted/30 rounded-b-xl flex justify-end gap-2 p-6">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}