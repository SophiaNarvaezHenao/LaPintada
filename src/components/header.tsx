import { Coffee, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#about', label: 'El Pueblo' },
  { href: '#cuisine', label: 'Sabores' },
  { href: '#events', label: 'Fiestas' },
  { href: '#sites', label: 'Sitios' },
  { href: '#folktale', label: 'Cuentos' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="#" className="mr-6 flex items-center">
          <Coffee className="h-6 w-6 text-primary" />
          <span className="ml-2 font-bold text-foreground">Legado de La Pintada</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
            <a href="#" className="flex items-center gap-2 text-lg font-semibold">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="text-foreground">Legado de La Pintada</span>
            </a>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary">
                {link.label}
              </a>
            ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
