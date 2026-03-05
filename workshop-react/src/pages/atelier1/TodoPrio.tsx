import { useState } from "react";
import * as Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Priority = "Haute" | "Moyenne" | "Basse";

interface Task {
  id: string;
  name: string;
  priority: Priority;
  completed: boolean;
}

interface TodoPrioProps {
  initialTasks?: { name: string; priority: Priority }[];
}

const TodoPrio = ({ initialTasks = [] }: TodoPrioProps) => {
  const [tasks, setTasks] = useState<Task[]>(
    initialTasks.map((t, i) => ({ ...t, id: `init-${i}`, completed: false })),
  );

  const [newName, setNewName] = useState("");
  const [newPriority, setNewPriority] = useState<Priority>("Moyenne");
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = () => {
    if (!newName.trim()) return;
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      name: newName,
      priority: newPriority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewName("");
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const filteredTasks = tasks.filter((t) =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalTasks = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <Card.Card>
      <Card.CardHeader>
        <Card.CardTitle>
          <p className="font-semibold">Todo List Prioritaire</p>
        </Card.CardTitle>
      </Card.CardHeader>

      <Card.CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1 flex">
              <Input
                placeholder="Nom de la tâche"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="flex-1"
              />
              <Select
                value={newPriority}
                onValueChange={(v) => setNewPriority(v as Priority)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Priorité" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Haute">
                    <p>Haute</p>
                  </SelectItem>
                  <SelectItem value="Moyenne">
                    <p>Moyenne</p>
                  </SelectItem>
                  <SelectItem value="Basse">
                    <p>Basse</p>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={addTask}>
              <p>Ajouter</p>
            </Button>
          </div>

          {/* Recherche */}
          <div>
            <Input
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Stats */}
          <div className="flex gap-4">
            <p>Total: {totalTasks}</p>-<p>Terminées: {completedCount}</p>
          </div>

          {/* Liste */}
          <div className="flex flex-col gap-2">
            {filteredTasks.map((task) => (
              <div key={task.id} className="flex justify-between">
                <div className="col-span-1 flex gap-4">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}

                  />
                  <p>{task.name}</p>
                </div>
                <Badge className={`${task.completed ? "bg-emerald-400" : ""}`}>
                  {task.completed ? (<p>Terminé</p>) : (<p>{task.priority}</p>)}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </Card.CardContent>
    </Card.Card>
  );
};

export default TodoPrio;
