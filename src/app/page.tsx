import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import FolkTaleGenerator from '@/components/folk-tale-generator';
import Cuisine from '@/components/cuisine';
import Events from '@/components/events';
import UnforgettableSites from '@/components/unforgettable-sites';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Cuisine />
        <Events />
        <UnforgettableSites />
        <FolkTaleGenerator />
      </main>
      <Footer />
    </>
  );
}
