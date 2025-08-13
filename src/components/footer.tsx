import { Coffee, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t bg-secondary">
      <div className="container text-center text-muted-foreground">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center">
            <Coffee className="h-6 w-6 text-primary" />
            <span className="ml-2 font-headline text-lg font-bold text-primary">Legado de La Pintada</span>
          </div>
          <p>Un homenaje digital al corazón de la cultura paisa.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Github /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Legado de La Pintada. Creado con ❤️ para el mundo.</p>
        </div>
      </div>
    </footer>
  );
}
