import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";

export default function GestionnaireNotes({ initialNotes = [] }) {
  const [notes, setNotes] = useState<number[]>(initialNotes);
  const [inputValue, setInputValue] = useState<string>("");

  const addNote = () => {
    const note = parseFloat(inputValue);

    if (!isNaN(note) && note >= 0 && note <= 20) {
      setNotes([...notes, note]);
      setInputValue("");
    } else {
      alert("La note doit être un nombre compris entre 0 et 20.");
    }
  };

  const deleteNote = (indexToDelete: number) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, curr) => acc + curr, 0);
    return (sum / notes.length).toFixed(2);
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestionnaire de Notes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex space-x-2">
          <Input
            type="number"
            placeholder="Entrez une note (0-20)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            min={0}
            max={20}
          />
          <Button onClick={addNote} className="flex items-center gap-2">
            <PlusCircle size={18} /> Ajouter
          </Button>
        </div>

        <div className="space-y-2">
          <p>Liste des évaluations :</p>
          {notes.length === 0 ? (
            <p>Aucune note pour le moment.</p>
          ) : (
            <ul className="max-height-[300px] overflow-y-auto space-y-2 pr-2">
              {notes.map((note, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center pl-3 bg-secondary"
                >
                  <span>{note} / 20</span>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteNote(index)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <span>Moyenne Générale:</span>
          <span
            className={`${Number(calculateAverage()) >= 10 ? "text-green-600" : "text-red-500"}`}
          >
            {calculateAverage()} / 20
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
