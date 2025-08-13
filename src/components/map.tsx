import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

const landmarks = [
  { name: 'Puente Viejo', top: '75%', left: '48%' },
  { name: 'Parque Principal', top: '50%', left: '52%' },
  { name: 'Iglesia San Antonio', top: '45%', left: '60%' },
  { name: 'Mirador del Cauca', top: '15%', left: '25%' },
];

export default function InteractiveMap() {
  return (
    <section id="map" className="bg-background">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-8">Explora el Pueblo</h2>
        <Card className="overflow-hidden relative shadow-2xl rounded-2xl border bg-card">
          <Image
            src="https://corregimientos.antioquia.gov.co/wp-content/uploads/2023/08/Mapas-La-Pintada-scaled.jpg"
            alt="Mapa de La Pintada"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            data-ai-hint="map of La Pintada Antioquia"
          />
          <TooltipProvider>
            {landmarks.map((landmark) => (
              <Tooltip key={landmark.name}>
                <TooltipTrigger asChild>
                  <button
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer p-2"
                    style={{ top: landmark.top, left: landmark.left }}
                    aria-label={landmark.name}
                  >
                    <MapPin className="w-10 h-10 text-accent drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] transition-transform hover:scale-125" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-primary text-primary-foreground">
                  <p className="font-bold">{landmark.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </Card>
      </div>
    </section>
  );
}
