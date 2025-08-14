'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const heroImage = { 
  src: 'https://images.unsplash.com/photo-1611148261486-4e315d904232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjb2xvbWJpYW4lMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzU1MTAyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080', 
  alt: 'Paisaje de La Pintada', 
  hint: 'colombian landscape' 
};

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        className="object-cover w-full h-full brightness-50"
        data-ai-hint={heroImage.hint}
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 p-4 container">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
          Bienvenidos a La Pintada
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 drop-shadow-md">
          Un viaje al corazón de la cultura paisa, donde cada rincón cuenta una historia y el aroma a café se mezcla con la brisa de las montañas.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform duration-300 hover:scale-105">
            <a href="#about">
              Descubre la Magia
              <ArrowDown className="ml-2 h-5 w-5"/>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
