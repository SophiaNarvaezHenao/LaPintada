import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Star, Droplet, Users, Sparkles, Church, Soup, Music, Gift, Drama, Cross, Utensils, Mountain, Award, Handshake } from 'lucide-react';

const events = [
  {
    name: 'Fiestas del Turismo y la Ganadería',
    date: '19 al 22 de Junio',
    description: 'La celebración más grande del municipio, una tradición que celebra la cultura, la identidad rural y el espíritu festivo.',
    activities: [
      { text: 'Actos culturales, musicales y bienvenida a delegaciones.', icon: Star },
      { text: 'Exposición ganadera y emocionantes rodeos.', icon: Mountain },
      { text: 'Eventos náuticos: kayak, avistamiento de aves y monos aulladores.', icon: Droplet },
      { text: 'Conciertos con artistas invitados y cierre con fuegos artificiales.', icon: Sparkles },
      { text: 'Concursos tradicionales para toda la familia.', icon: Gift },
      { text: 'Apoyo a emprendimientos locales afectados por inundaciones.', icon: Handshake },
    ],
    color: 'accent'
  },
  {
    name: 'Semana Santa en Vivo',
    date: 'Marzo/Abril',
    description: 'Una tradición solemne y hermosa, con procesiones que recorren las calles del pueblo. Los habitantes se convierten en actores para representar con devoción la Pasión de Cristo.',
    activities: [
      { text: 'Procesiones solemnes por las calles principales.', icon: Church },
      { text: 'Representaciones teatrales de la Pasión y Muerte de Jesús.', icon: Drama },
      { text: 'Conciertos de música sacra en la iglesia del pueblo.', icon: Music },
      { text: 'Viacrucis al cerro de la cruz con participación de la comunidad.', icon: Cross },
    ],
    color: 'primary'
  },
  {
    name: 'Festival de Sancochos',
    date: 'Octubre',
    description: 'Las familias y amigos se reúnen a la orilla del río para competir por el sancocho más delicioso. Un día de integración comunitaria.',
    activities: [
      { text: 'Concurso al mejor sancocho con jurados expertos.', icon: Award },
      { text: 'Música en vivo y baile popular durante todo el día.', icon: Music },
      { text: 'Venta de artesanías y productos locales.', icon: Gift },
      { text: 'Juegos tradicionales para niños y adultos.', icon: Users },
    ],
    color: 'green'
  },
];

const colorVariants = {
  accent: {
    bg: 'bg-accent/20',
    text: 'text-accent',
    border: 'border-accent',
  },
  primary: {
    bg: 'bg-primary/20',
    text: 'text-primary',
    border: 'border-primary',
  },
  green: {
    bg: 'bg-emerald-500/20',
    text: 'text-emerald-500',
    border: 'border-emerald-500',
  }
}

export default function Events() {
  return (
    <section id="events" className="bg-transparent">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-12">Fiestas y Tradiciones</h2>
        <div className="grid lg:grid-cols-1 gap-8">
          {events.map((event) => {
            const colors = colorVariants[event.color as keyof typeof colorVariants];
            return (
            <Card key={event.name} className={`bg-card/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-2xl transition-shadow rounded-2xl border-l-4 ${colors.border}`}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg ${colors.bg}`}>
                    <Calendar className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-2xl text-primary-foreground">{event.name}</CardTitle>
                    <CardDescription className={`font-bold ${colors.text}`}>{event.date}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80 mb-6">{event.description}</p>
                <h4 className="font-semibold text-primary-foreground mb-3">Actividades destacadas:</h4>
                <ul className="space-y-3">
                  {event.activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-6 h-6 flex items-center justify-center rounded-full ${colors.bg} flex-shrink-0`}>
                        <activity.icon className={`w-4 h-4 ${colors.text}`} />
                      </div>
                      <span className="text-card-foreground/80">{activity.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}
