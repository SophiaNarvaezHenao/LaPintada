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
  { src: 'https://puebliandoporantioquia.com.co/wp-content/uploads/2025/03/PUENTE-COLGANTE-LA-PINTADA-B-1-1.jpg', alt: 'Puente Viejo sobre el río Cauca', hint: 'old bridge river' },
  { src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fpuente-sobre-el-rio-cauca-la-pintada-antioquia--568843349016149479%2F&psig=AOvVaw2y4XqS2iGzY6J_mB-Z5g-A&ust=1726002012015000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJD69f78o4cDFQAAAAAdAAAAABAE', alt: 'Antiguo Ferrocarril de Antioquia en La Pintada', hint: 'old train colombia' },
  { src: 'https://puebliandoporantioquia.com.co/wp-content/uploads/2025/03/IGLESIA-LA-PINTADA-B-1-1.jpg', alt: 'Iglesia San Antonio de La Pintada', hint: 'church colombia' },
  { src: 'https://i.ytimg.com/vi/bYm2sJ95E-4/maxresdefault.jpg', alt: 'Fiestas del Turismo y la Ganadería', hint: 'town festival parade' },
  { src: 'https://corregimientos.antioquia.gov.co/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-11-at-2.32.22-PM.jpeg', alt: 'Habitantes de La Pintada', hint: 'colombian people' },
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
