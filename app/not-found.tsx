import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import coneImage from "@/public/cone.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="w-full py-10 text-center">
      <h1 className="font-display text-4xl font-bold text-gray-700">
        Nada encontrado aqui...
      </h1>
      <Image
        src={coneImage}
        alt="Dois cones interligados com fita de isolamento"
        className="mx-auto mt-10 w-xs"
      />
      <p className="text-2xl font-light text-gray-500">
        Não foi possível encontrar a página solicitada.
      </p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-6",
        )}
      >
        Voltar à Home
      </Link>
    </main>
  );
}
