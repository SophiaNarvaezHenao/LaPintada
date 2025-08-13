import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const dishes = [
  {
    name: 'Bandeja Paisa',
    description: 'El plato insignia de Antioquia: frijoles, arroz, carne molida, chicharrón, huevo frito, plátano maduro, arepa y aguacate.',
    hint: 'bandeja paisa colombian food',
    src: 'https://images.unsplash.com/photo-1618449233264-95366c6f5048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxiYW5kZWphJTIwcGFpc2ElMjBjb2xvbWJpYW4lMjBmb29kfGVufDB8fHx8MTc1NTEwMjMwMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Sancocho Antioqueño',
    description: 'Una sopa robusta y reconfortante, hecha con varias carnes, papa, yuca, plátano y mazorca. El sabor de un domingo en familia.',
    hint: 'sancocho soup',
    src: 'https://images.unsplash.com/photo-1611068120879-531d290f60d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzYW5jb2NobyUyMHNvdXB8ZW58MHx8fHwxNzU1MTAyMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Arepa con Quesito',
    description: 'Simple y perfecta. Una arepa de maíz blanco o amarillo, asada y acompañada de un trozo de queso fresco antioqueño.',
    hint: 'arepa with cheese',
    src: 'https://images.unsplash.com/photo-1662228733244-26c9a35156b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhcmVwYSUyMHdpdGglMjBjaGVlc2V8ZW58MHx8fHwxNzU1MTAyMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function Cuisine() {
  return (
    <section id="cuisine" className="bg-yellow-500/10 py-20 sm:py-24">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-12 text-yellow-900 drop-shadow-sm">Sabores que Enamoran</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <Card key={dish.name} className="bg-white/80 backdrop-blur-sm border-2 border-white/40 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl group">
              <div className="overflow-hidden">
                <Image
                  src={dish.src}
                  alt={dish.name}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={dish.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-700">{dish.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-800/90">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
