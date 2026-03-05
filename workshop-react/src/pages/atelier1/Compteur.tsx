import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function Compteur({ initialCount = 0, step = 1 }) {
  const [counter, setCounter] = useState(initialCount);
  const increment = () => setCounter((prev) => prev + step);
  const decrement = () => setCounter((prev) => prev - step);
  return (
    <div className="grid place-items-center">
      <Card className="w-64">
        <CardHeader>
          <CardTitle>Compteur</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg">{counter}</p>
        </CardContent>
        <CardFooter className="flex gap-2 justify-between">
          <Button onClick={increment}>+ {step}</Button>
          <Button onClick={decrement}>- {step}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
