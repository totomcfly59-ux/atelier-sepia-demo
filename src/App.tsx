import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Salon } from '@/components/Salon';
import { Prestations } from '@/components/Prestations';
import { Gallery } from '@/components/Gallery';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <Hero />
        <Salon />
        <Prestations />
        <Gallery />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
