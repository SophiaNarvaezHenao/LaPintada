import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import InteractiveMap from '@/components/map';
import Gallery from '@/components/gallery';
import Figures from '@/components/figures';
import FolkTaleGenerator from '@/components/folk-tale-generator';
import Cuisine from '@/components/cuisine';
import Events from '@/components/events';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Cuisine />
        <Gallery />
        <InteractiveMap />
        <Figures />
        <FolkTaleGenerator />
        <Events />
      </main>
      <Footer />
    </>
  );
}
