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
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

const heroImages = [
  { src: 'https://images.unsplash.com/photo-1589629833710-00af2ddaf97a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjb2xvbWJpYW4lMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzU1MTAyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Paisaje de La Pintada', hint: 'colombian landscape' },
  { src: 'https://images.unsplash.com/photo-1650201777831-8c5c23a2b41e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyaXZlciUyMHZpZXclMjBjb2xvbWJpYXxlbnwwfHx8fDE3NTUxMDI4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Río Cauca en La Pintada', hint: 'river view colombia' },
  { src: 'https://images.unsplash.com/photo-1652019815309-95821b00084c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjb2ZmZWUlMjBwbGFudGF0aW9ufGVufDB8fHx8MTc1NTEwMjg0OXww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Cultura cafetera', hint: 'coffee plantation' },
];

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="relative h-[90vh] w-full text-white overflow-hidden">
       <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{objectFit: 'cover'}}
                  className="brightness-50"
                  data-ai-hint={image.hint}
                  priority={index === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 text-white bg-black/30 hover:bg-black/50 border-none" />
          <CarouselNext className="absolute right-4 text-white bg-black/30 hover:bg-black/50 border-none" />
        </Carousel>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4 container">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-shadow-lg text-white">
          Bienvenidos a La Pintada
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 drop-shadow-md">
          Un viaje al corazón de la cultura paisa, donde cada rincón cuenta una historia y el aroma a café se mezcla con la brisa de las montañas.
        </p>
        <div className="mt-8">
          <a href="#about">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform duration-300 hover:scale-105">
              Descubre la Magia
              <ArrowDown className="ml-2 h-5 w-5"/>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
