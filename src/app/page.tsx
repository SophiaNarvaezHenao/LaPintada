import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
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
        <Events />
        <FolkTaleGenerator />
      </main>
      <Footer />
    </>
  );
}
