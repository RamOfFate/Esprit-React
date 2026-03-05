import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";
import { useState } from "react";

export default function ListManager({
  initialItems = ["React", "Angular", "Vuejs"],
  placeholder = "Entrez un nouveau élément",
}) {
  const [liste, setListe] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() && !liste.includes(newItem.trim())) {
      setListe([...liste, newItem.trim()]);
      setNewItem("");
    }
  };

  const deleteItem = (itemToDelete: string) => {
    setListe(liste.filter((item) => item !== itemToDelete));
  };


  return (
    <div className="grid place-items-center">
      <Card className="w-64">
        <CardContent>
          <ul>
            {liste.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                {item}
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => deleteItem(item)}
                >
                  <Trash />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="gap-2">
          <Input
            placeholder={placeholder}
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />
          <Button onClick={addItem}>Ajouter</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
