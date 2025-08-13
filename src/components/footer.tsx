export default function Footer() {
  return (
    <footer className="py-6 border-t bg-background">
      <div className="container text-center text-sm text-foreground/60">
        <p>Creado con ❤️ para el pueblo de La Pintada, Antioquia.</p>
        <p>&copy; {new Date().getFullYear()} Legado de La Pintada. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
