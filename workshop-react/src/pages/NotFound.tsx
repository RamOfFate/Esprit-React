import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center text-center">
      <div className="p-6">
        <FileQuestion className="h-12 w-12 text-primary " />
      </div>
      <h1 className="text-4xl font-bold tracking-tighter font-mono">
        404: Exercise Not Found
      </h1>
      <p className="text-muted-foreground mt-2 mb-8 max-w-100">
        It looks like this exercise hasn't been coded yet or the route is
        incorrect. Keep studying!
      </p>
      <Button asChild>
        <Link title="Go Home" to="/">
          <Home className="mr-2 h-4 w-4" /> Back to Dashboard
        </Link>
      </Button>
    </div>
  );
}
