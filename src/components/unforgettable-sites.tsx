import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const sites = [
  {
    name: 'Río Cauca',
    description: 'El alma de La Pintada. Sus aguas bañan el municipio, creando paisajes espectaculares y ofreciendo espacios para la recreación y la pesca.',
    hint: 'cauca river colombia',
    src: 'https://s0.wklcdn.com/image_268/8043024/161624249/101248608.400x300.jpg',
  },
  {
    name: 'Puente Colgante de Colores',
    description: 'Una estructura vibrante y moderna que se ha convertido en un nuevo símbolo del municipio, ideal para fotos y paseos sobre el río.',
    hint: 'colorful suspension bridge',
    src: 'https://s1.wklcdn.com/image_182/5483775/83739255/54109819.400x300.jpg',
  },
  {
    name: 'Parque Principal',
    description: 'El corazón del pueblo, un lugar de encuentro rodeado de arquitectura tradicional, donde se vive el ritmo tranquilo de La Pintada.',
    hint: 'colombian town square',
    src: 'https://www.viajarenverano.com/wp-content/uploads/2019/12/La-Pintada-Frontis.jpg',
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
