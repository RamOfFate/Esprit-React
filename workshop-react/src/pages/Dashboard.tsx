import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { EXERCISES } from "@/models/Exercice";

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Application côté client 2 - 4TWIN5
        </h1>
        <p className="text-muted-foreground mt-2">
          Tracking my progress through the semester.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXERCISES.map((ex) => (
          <Card key={ex.id}>
            <CardHeader className="flex-1">
              <CardTitle>{ex.title}</CardTitle>
              <CardDescription>{ex.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to={ex.path}>View Exercise</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
