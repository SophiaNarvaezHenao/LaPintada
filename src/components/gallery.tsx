import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const photos = [
  { src: 'https://placehold.co/600x400.png', alt: 'Calle antigua de La Pintada', hint: 'old colombian street' },
  { src: 'https://placehold.co/600x400.png', alt: 'Campesinos en cosecha de café', hint: 'coffee harvest colombia' },
  { src: 'https://placehold.co/600x400.png', alt: 'Familia en el río Cauca', hint: 'family river vintage' },
  { src: 'https://placehold.co/600x400.png', alt: 'Fiestas del pueblo', hint: 'town festival colombia' },
  { src: 'https://placehold.co/600x400.png', alt: 'Arquitectura colonial', hint: 'colonial architecture colombia' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-secondary/30">
      <div className="container">
        <h2 className="font-headline text-3xl font-bold text-primary text-center mb-8">Galería de Recuerdos</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden shadow-md transition-transform hover:scale-105 rounded-lg">
                    <CardContent className="flex aspect-[4/3] items-center justify-center p-0">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={photo.hint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary -left-4" />
          <CarouselNext className="text-primary -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
