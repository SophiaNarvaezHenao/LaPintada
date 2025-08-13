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

const heroImages = [
  { src: 'https://placehold.co/1920x1080.png', alt: 'Paisaje de La Pintada', hint: 'colombian landscape' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Río Cauca en La Pintada', hint: 'river view colombia' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Cultura cafetera', hint: 'coffee plantation' },
];

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full text-white">
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
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/20 hover:bg-white/40" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/20 hover:bg-white/40" />
        </Carousel>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 container">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter drop-shadow-lg">
          Bienvenidos a La Pintada
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
          Un viaje al corazón de la cultura paisa, donde cada rincón cuenta una historia y el aroma a café se mezcla con la brisa de las montañas.
        </p>
        <div className="mt-8">
          <a href="#about">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">Descubre la Magia</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
