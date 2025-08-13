import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const events = [
  {
    name: 'Fiestas del Turismo y la Ganadería',
    date: 'Junio',
    description: 'La celebración más grande del municipio, con cabalgatas, conciertos, ferias y la calidez de nuestra gente.'
  },
  {
    name: 'Semana Santa en Vivo',
    date: 'Marzo/Abril',
    description: 'Una tradición solemne y hermosa, con procesiones que recorren las calles del pueblo, representando la pasión de Cristo.'
  },
  {
    name: 'Festival de Sancochos',
    date: 'Octubre',
    description: 'Las familias y amigos se reúnen a la orilla del río para competir por el sancocho más delicioso en un ambiente de fiesta.'
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 bg-secondary/30">
      <div className="container">
        <h2 className="font-headline text-3xl font-bold text-primary text-center mb-8">Fiestas y Tradiciones</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.name} className="text-center shadow-lg hover:shadow-xl transition-shadow rounded-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{event.name}</CardTitle>
                <CardDescription className="font-bold text-accent">{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
