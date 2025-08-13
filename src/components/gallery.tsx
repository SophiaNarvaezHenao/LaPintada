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
    <section id="gallery" className="py-16 bg-background">
      <div className="container">
        <h2 className="font-headline text-4xl font-bold text-primary text-center mb-12">Galería de Recuerdos</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden shadow-lg transition-transform hover:shadow-2xl hover:-translate-y-2 duration-300 rounded-xl">
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
          <CarouselPrevious className="text-primary -left-4 md:-left-12" />
          <CarouselNext className="text-primary -right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
