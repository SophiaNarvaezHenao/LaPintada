import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter, Playfair_Display } from 'next/font/google';

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: 'Legado de La Pintada',
  description: 'Un viaje al corazón de la cultura paisa en La Pintada, Antioquia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased animated-bg",
        fontSans.variable,
        fontSerif.variable
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
