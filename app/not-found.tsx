import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="py-10 text-center">
      <h1 className="font-display text-5xl font-bold text-gray-700">
        Nada encontrado aqui...
      </h1>
      <img
        src="/cone.png"
        alt="Imagem de um barco afundando"
        className="mx-auto mt-10 w-lg"
      />
      <p className="text-3xl font-light text-gray-500">
        Não foi possível encontrar a página solicitada.
      </p>
      <a
        href="/" 
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-12 px-6 py-8 text-lg",
        )}
      >
        Voltar à Home
      </a>
    </main>
  );
}
