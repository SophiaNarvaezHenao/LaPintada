import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

const landmarks = [
  { name: 'Puente Viejo', top: '50%', left: '30%' },
  { name: 'Parque Principal', top: '40%', left: '55%' },
  { name: 'Iglesia San Antonio', top: '35%', left: '65%' },
  { name: 'Mirador del Cauca', top: '70%', left: '75%' },
];

export default function InteractiveMap() {
  return (
    <section id="map" className="bg-transparent">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-8">Explora el Pueblo</h2>
        <Card className="overflow-hidden relative shadow-2xl rounded-2xl border-4 border-white/20">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Mapa de La Pintada"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            data-ai-hint="vintage map colombia"
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
