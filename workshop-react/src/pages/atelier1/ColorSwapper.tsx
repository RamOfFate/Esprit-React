import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";

export default function ColorSwapper({ initialColor = "#ff0055" }) {
  const [color, setColor] = useState(initialColor);
  const generateRandomColor = () => {
    const randomColorNumber = Math.floor(Math.random() * 0x1000000);
    let hexColor = randomColorNumber.toString(16);
    hexColor = hexColor.padStart(6, "0");
    setColor(`#${hexColor}`);
  };
  return (
    <div className="grid place-items-center">
      <Card className="w-fit">
        <CardContent className="flex justify-center">
          <div className="w-16 h-16" style={{ background: color }}></div>
        </CardContent>
        <CardFooter>
          <Button onClick={generateRandomColor}>Changer de couleur</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
