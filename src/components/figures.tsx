import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const figures = [
  {
    name: 'José María "El Arriero" Montoya',
    title: 'Fundador y Pionero',
    bio: 'Un legendario arriero que con su mula y su tesón, abrió caminos y comercios, tejiendo las primeras redes que darían vida a La Pintada.',
    hint: 'colombian farmer portrait',
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Arrieros_de_Antioquia.jpg'
  },
  {
    name: 'Isabel "La Maestra" Gaviria',
    title: 'Educadora del Pueblo',
    bio: 'Con una vocación inquebrantable, dedicó su vida a enseñar a leer y escribir a generaciones de pintadeños, sembrando el futuro en cada niño.',
    hint: 'vintage female teacher',
    src: 'https://placehold.co/128x128.png'
  },
  {
    name: 'Arturo "El Cronista" Pérez',
    title: 'Guardián de la Memoria',
    bio: 'Historiador aficionado y narrador de historias, documentó las tradiciones orales y los eventos que formaron la identidad del municipio.',
    hint: 'old man writer',
    src: 'https://placehold.co/128x128.png'
  },
];

export default function Figures() {
  return (
    <section id="figures" className="bg-background">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-12">Personajes Ilustres</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {figures.map((figure) => (
            <Card key={figure.name} className="flex flex-col text-center items-center p-6 bg-card border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
              <CardHeader className="p-0">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-primary">
                  <Image
                    src={figure.src}
                    alt={`Retrato de ${figure.name}`}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    data-ai-hint={figure.hint}
                  />
                </div>
                <CardTitle className="mt-4 text-2xl text-foreground">{figure.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{figure.title}</CardDescription>
              </CardHeader>
              <CardContent className="mt-4 p-0">
                <p className="text-muted-foreground">{figure.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
