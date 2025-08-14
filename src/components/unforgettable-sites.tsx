import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const sites = [
  {
    name: 'Río Cauca',
    description: 'El alma de La Pintada. Sus aguas bañan el municipio, creando paisajes espectaculares y ofreciendo espacios para la recreación y la pesca.',
    hint: 'cauca river colombia',
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Puente_ferreo_sobre_el_rio_cauca.jpg',
  },
  {
    name: 'Salto del Buey',
    description: 'Una impresionante cascada de más de 80 metros de altura. Un paraíso natural para los amantes del ecoturismo y la aventura. (Ubicado en La Ceja/Abejorral)',
    hint: 'waterfall nature',
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Salto_del_buey.jpg',
  },
  {
    name: 'Puente de Occidente',
    description: 'Monumento Nacional y una joya de la ingeniería del siglo XIX. Conecta los municipios de Olaya y Santa Fe de Antioquia.',
    hint: 'suspension bridge colombia',
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Puente_de_Occidente%2C_Antioquia.jpg',
  },
  {
    name: 'Parque Principal',
    description: 'El corazón del pueblo, un lugar de encuentro rodeado de arquitectura tradicional, donde se vive el ritmo tranquilo de La Pintada.',
    hint: 'colombian town square',
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/La_pintada_parque.jpg',
  },
  {
    name: 'Cañón del Río Cauca',
    description: 'Un imponente cañón que ofrece vistas panorámicas y paisajes áridos de gran belleza, ideales para la fotografía y la contemplación.',
    hint: 'cauca river canyon',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ca%C3%B1on_del_r%C3%ADo_cauca.jpg/1280px-Ca%C3%B1on_del_r%C3%ADo_cauca.jpg',
  },
  {
    name: 'El Mirador',
    description: 'Un punto elevado que ofrece una vista privilegiada del pueblo y el majestuoso cañón del río Cauca. Perfecto para ver el atardecer.',
    hint: 'lookout point landscape',
    src: 'https://puebliandoporantioquia.com.co/wp-content/uploads/2025/03/PANORAMICA-LA-PINTADA-B-2-1.jpg',
  },
];

export default function UnforgettableSites() {
  return (
    <section id="sites" className="bg-background">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-12">Sitios Inolvidables</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site) => (
            <Card key={site.name} className="bg-card/80 backdrop-blur-sm border-white/20 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl group">
              <div className="overflow-hidden">
                <Image
                  src={site.src}
                  alt={site.name}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={site.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{site.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{site.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
