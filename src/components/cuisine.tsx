import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const dishes = [
  {
    name: 'Bandeja Paisa',
    description: 'El plato insignia de Antioquia: frijoles, arroz, carne molida, chicharrón, huevo frito, plátano maduro, arepa y aguacate.',
    hint: 'bandeja paisa colombian food',
  },
  {
    name: 'Sancocho Antioqueño',
    description: 'Una sopa robusta y reconfortante, hecha con varias carnes, papa, yuca, plátano y mazorca. El sabor de un domingo en familia.',
    hint: 'sancocho soup',
  },
  {
    name: 'Arepa con Quesito',
    description: 'Simple y perfecta. Una arepa de maíz blanco o amarillo, asada y acompañada de un trozo de queso fresco antioqueño.',
    hint: 'arepa with cheese',
  },
];

export default function Cuisine() {
  return (
    <section id="cuisine" className="py-16">
      <div className="container">
        <h2 className="font-headline text-3xl font-bold text-primary text-center mb-8">Sabores de Antaño</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <Card key={dish.name} className="overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 rounded-lg">
              <Image
                src="https://placehold.co/400x300.png"
                alt={dish.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                data-ai-hint={dish.hint}
              />
              <CardHeader>
                <CardTitle className="font-headline">{dish.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
