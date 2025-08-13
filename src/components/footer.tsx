import { Coffee, Github, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="py-8 border-t bg-background">
      <div className="container text-center text-muted-foreground">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center">
            <Coffee className="h-6 w-6 text-primary" />
            <span className="ml-2 font-headline text-lg font-bold text-foreground">Legado de La Pintada</span>
          </div>
          <p>Un homenaje digital al corazón de la cultura paisa.</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Github"><Github /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter"><Twitter /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Instagram"><Instagram /></a>
            </Button>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Legado de La Pintada. Creado con ❤️ para el mundo.</p>
        </div>
      </div>
    </footer>
  );
}
