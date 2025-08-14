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
  { src: 'https://images.unsplash.com/photo-1599901594957-6590a2a445d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvJTIwY29sb21iaWFuJTIwc3RyZWV0fGVufDB8fHx8MTc1NTExODMxMHww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Calle antigua de La Pintada', hint: 'old colombian street' },
  { src: 'https://images.unsplash.com/photo-1593132598099-35a143a41b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBoYXJ2ZXN0JTIwY29sb21iaWF8ZW58MHx8fHwxNzU1MTE4MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Campesinos en cosecha de café', hint: 'coffee harvest colombia' },
  { src: 'https://images.unsplash.com/photo-1605312389146-81f7274b7c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByaXZlciUyMHZpbnRhZ2V8ZW58MHx8fHwxNzU1MTE4MzExfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Familia en el río Cauca', hint: 'family river vintage' },
  { src: 'https://images.unsplash.com/photo-1632483187265-53896c6e26ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0b3duJTIwZmVzdGl2YWwlMjBjb2xvbWJpYXxlbnwwfHx8fDE3NTUxMTgzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Fiestas del pueblo', hint: 'town festival colombia' },
  { src: 'https://images.unsplash.com/photo-1588616952876-6b0d1a494793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMGFyY2hpdGVjdHVyZSUyMGNvbG9tYmlhfGVufDB8fHx8MTc1NTExODMxMnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Arquitectura colonial', hint: 'colonial architecture colombia' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-background">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-12">Galería de Recuerdos</h2>
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
                  <Card className="overflow-hidden shadow-lg transition-transform hover:shadow-2xl hover:-translate-y-2 duration-300 rounded-2xl border bg-card">
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
          <CarouselPrevious className="text-foreground bg-background/50 hover:bg-background/80 border-border -left-4 md:-left-12" />
          <CarouselNext className="text-foreground bg-background/50 hover:bg-background/80 border-border -right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
