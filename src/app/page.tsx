import About from '@/components/about';
import Contact from '@/components/contact';
import CoupleTherapy from '@/components/couple-therapy';
import Hero from '@/components/hero';
import Methods from '@/components/methods';
import Navbar from '@/components/navbar';
import Supervision from '@/components/supervision';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div id="home" className="scroll-mt-16">
        <Hero />
      </div>
      <div id="about" className="scroll-mt-16">
        <About />
      </div>
      <div id="methods" className="scroll-mt-16">
        <Methods />
      </div>
      <div id="supervision" className="scroll-mt-16">
        <Supervision />
      </div>
      <div id="couple-therapy" className="scroll-mt-16">
        <CoupleTherapy />
      </div>
      <div id="contact" className="scroll-mt-16">
        <Contact />
      </div>
    </main>
  );
}
