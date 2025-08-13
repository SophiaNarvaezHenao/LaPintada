import { Coffee } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'El Pueblo' },
  { href: '#map', label: 'Mapa' },
  { href: '#gallery', label: 'Galería' },
  { href: '#events', label: 'Fiestas' },
  { href: '#folktale', label: 'Cuentos' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <a href="#" className="mr-6 flex items-center">
          <Coffee className="h-6 w-6 text-primary" />
          <span className="ml-2 font-headline text-lg font-bold">Legado de La Pintada</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
