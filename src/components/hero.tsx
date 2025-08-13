'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowDown } from 'lucide-react';

const heroImages = [
  { src: 'https://placehold.co/1920x1080.png', alt: 'Paisaje de La Pintada', hint: 'colombian landscape' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Río Cauca en La Pintada', hint: 'river view colombia' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Cultura cafetera', hint: 'coffee plantation' },
];

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full text-white overflow-hidden">
       <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-50"
                  data-ai-hint={image.hint}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-white/50" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-white/50" />
        </Carousel>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4 container">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-shadow-lg">
          Bienvenidos a La Pintada
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 drop-shadow-md">
          Un viaje al corazón de la cultura paisa, donde cada rincón cuenta una historia y el aroma a café se mezcla con la brisa de las montañas.
        </p>
        <div className="mt-8">
          <a href="#about">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform duration-300 hover:scale-105">
              Descubre la Magia
              <ArrowDown className="ml-2 h-5 w-5"/>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
