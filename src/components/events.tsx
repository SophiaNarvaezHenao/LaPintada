import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Star, Droplet, Users, Sparkles, Church, Soup, Music, Gift, Drama, Cross, Utensils } from 'lucide-react';

const events = [
  {
    name: 'Fiestas del Turismo y la Ganadería',
    date: '19 al 22 de Junio',
    description: 'La celebración más grande del municipio, una tradición que celebra la cultura, la identidad rural y el espíritu festivo. Se busca impulsar la recuperación económica tras las inundaciones, apoyando a las familias afectadas.',
    activities: [
      { text: 'Actos culturales, musicales y bienvenida a delegaciones.', icon: Star },
      { text: 'Exposición ganadera y emocionantes rodeos.', icon: Users },
      { text: 'Eventos náuticos: kayak, avistamiento de aves y monos aulladores.', icon: Droplet },
      { text: 'Conciertos con artistas invitados y cierre con fuegos artificiales.', icon: Sparkles },
    ],
    bgColor: 'bg-primary/10',
    textColor: 'text-primary'
  },
  {
    name: 'Semana Santa en Vivo',
    date: 'Marzo/Abril',
    description: 'Una tradición solemne y hermosa, con procesiones que recorren las calles del pueblo. Los habitantes se convierten en actores para representar con devoción la Pasión de Cristo, creando una atmósfera de profundo respeto y comunidad.',
    activities: [
      { text: 'Procesiones solemnes por las calles principales.', icon: Church },
      { text: 'Representaciones teatrales de la Pasión y Muerte de Jesús.', icon: Drama },
      { text: 'Conciertos de música sacra en la iglesia del pueblo.', icon: Music },
      { text: 'Viacrucis al cerro de la cruz con participación de la comunidad.', icon: Cross },
    ],
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-indigo-600'
  },
  {
    name: 'Festival de Sancochos',
    date: 'Octubre',
    description: 'Las familias y amigos se reúnen a la orilla del río para competir por el sancocho más delicioso. Un día de integración comunitaria donde el aroma a leña y los sabores tradicionales son los protagonistas.',
    activities: [
      { text: 'Concurso al mejor sancocho con jurados expertos.', icon: Soup },
      { text: 'Música en vivo y baile popular durante todo el día.', icon: Music },
      { text: 'Venta de artesanías y productos locales.', icon: Gift },
      { text: 'Juegos tradicionales para niños y adultos.', icon: Utensils },
    ],
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-600'
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 bg-secondary/30">
      <div className="container">
        <h2 className="font-headline text-3xl font-bold text-primary text-center mb-8">Fiestas y Tradiciones</h2>
        <div className="grid lg:grid-cols-1 gap-8">
          {events.map((event) => (
            <Card key={event.name} className={`shadow-lg hover:shadow-xl transition-shadow rounded-lg border-l-4 ${event.bgColor.replace('bg-', 'border-').replace('/10', '')}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full ${event.bgColor}`}>
                    <Calendar className={`w-8 h-8 ${event.textColor}`} />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="font-headline">{event.name}</CardTitle>
                    <CardDescription className={`font-bold ${event.textColor}`}>{event.date}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{event.description}</p>
                {event.activities && event.activities.length > 0 && (
                  <ul className="space-y-2">
                    {event.activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <activity.icon className={`w-5 h-5 mt-1 flex-shrink-0 ${event.textColor}`} />
                        <span className="text-foreground/70">{activity.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
