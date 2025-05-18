import About from '@/components/about';
import Contact from '@/components/contact';
import CoupleTherapy from '@/components/couple-therapy';
import Hero from '@/components/hero';
import Methods from '@/components/methods';
import Navbar from '@/components/navbar';
import Supervision from '@/components/supervision';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hem | Tomas Thiel Hultcrantz - Psykoterapi Stockholm',
  description:
    'Välkommen till Tomas Thiel Hultcrantz psykoterapimottagning i Stockholm. Erbjuder professionell psykoterapi för individer och par.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-background">
        <section id="home" className="scroll-mt-16" aria-label="Hem">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-16" aria-label="Om mig">
          <About />
        </section>
        <section id="methods" className="scroll-mt-16" aria-label="Metoder">
          <Methods />
        </section>
        <section
          id="supervision"
          className="scroll-mt-16"
          aria-label="Handledning"
        >
          <Supervision />
        </section>
        <section
          id="couple-therapy"
          className="scroll-mt-16"
          aria-label="Parterapi"
        >
          <CoupleTherapy />
        </section>
        <section id="contact" className="scroll-mt-16" aria-label="Kontakt">
          <Contact />
        </section>
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Tomas Thiel Hultcrantz. Alla rättigheter
          förbehållna.
        </p>
      </footer>
    </>
  );
}
