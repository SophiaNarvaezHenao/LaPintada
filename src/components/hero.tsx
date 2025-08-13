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
  { src: 'https://puebliandoporantioquia.com.co/wp-content/uploads/2025/03/PANORAMICA-LA-PINTADA-B-2-1.jpg', alt: 'Paisaje de La Pintada', hint: 'colombian landscape' },
  { src: 'https://storage.googleapis.com/static.proantioquia.org/MARCA-REGI%C3%93N-CONTENIDOS/LA-PINTADA/la-pintada-cauca.jpg', alt: 'Río Cauca en La Pintada', hint: 'river view colombia' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Puente_de_La_Pintada.JPG', alt: 'Puente de La Pintada', hint: 'colombian bridge' },
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
