import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">Un Pueblo con Alma</h2>
          <p className="text-lg text-muted-foreground">
            La Pintada, Antioquia, es un tesoro enclavado entre montañas, un lienzo vivo pintado por el río Cauca. Conocido por su clima cálido y su gente amable, este municipio es una parada obligatoria en la ruta hacia el Suroeste antioqueño.
          </p>
          <p className="text-lg text-muted-foreground">
            Aquí, la tradición arriera se respira en el aire, y la arquitectura colonial de sus casas evoca la nostalgia de la casa de los abuelos. Es un lugar donde el tiempo parece pasar más despacio, invitando a disfrutar de la vida simple y la belleza natural.
          </p>
        </div>
        <Card className="overflow-hidden shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-white/20">
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
