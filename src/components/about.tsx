import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline text-3xl font-bold text-primary mb-4">Un Pueblo con Alma</h2>
          <p className="text-foreground/80 mb-4">
            La Pintada, Antioquia, es un tesoro enclavado entre montañas, un lienzo vivo pintado por el río Cauca. Conocido por su clima cálido y su gente amable, este municipio es una parada obligatoria en la ruta hacia el Suroeste antioqueño.
          </p>
          <p className="text-foreground/80">
            Aquí, la tradición arriera se respira en el aire, y la arquitectura colonial de sus casas evoca la nostalgia de la casa de los abuelos. Es un lugar donde el tiempo parece pasar más despacio, invitando a disfrutar de la vida simple y la belleza natural.
          </p>
        </div>
        <Card className="overflow-hidden shadow-lg rounded-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Vista de La Pintada"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            data-ai-hint="colombian town landscape"
          />
        </Card>
      </div>
    </section>
  );
}
