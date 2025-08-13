import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center py-20 md:py-32 text-center">
      <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-primary">
        Bienvenidos a La Pintada
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-foreground/80">
        Un viaje al corazón de la cultura paisa, donde cada rincón cuenta una historia y el aroma a café se mezcla con la brisa de las montañas.
      </p>
      <div className="mt-8">
        <a href="#about">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Descubre la Magia</Button>
        </a>
      </div>
    </section>
  );
}
