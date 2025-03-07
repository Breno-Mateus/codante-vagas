import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="w-full py-10 text-center">
      <h1 className="font-display text-4xl font-bold text-gray-700">
        Nada encontrado aqui...
      </h1>
      <img
        src="/cone.png"
        alt="Dois cones interligados com fita de isolamento"
        className="mx-auto mt-10 w-xs"
      />
      <p className="text-2xl font-light text-gray-500">
        Não foi possível encontrar a página solicitada.
      </p>
      <a
        href="/"
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-6",
        )}
      >
        Voltar à Home
      </a>
    </main>
  );
}
