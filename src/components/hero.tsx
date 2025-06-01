import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center py-16"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 bg-muted/50" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/20" />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <h1
              id="hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Varmt välkommen hit.
            </h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Jag heter Tomas Thiel Hultcrantz och är legitimerad
                psykoterapeut. Jag möter människor i olika livssituationer – med
                oro, ångest, relationssvårigheter, trauma, sorg, självkritik
                eller bara en känsla av att något inte känns bra. Du behöver
                inte ha en tydlig "anledning" för att komma – det räcker att du
                vill ha förändring.
              </p>
              <p>
                I mitt arbete är relationen mellan oss det allra viktigaste.
                Forskning visar att det som främst gör terapi hjälpsam inte bara
                är tekniken, utan hur vi möts – i en trygg, förtroendefull och
                hoppfull relation. När du känner dig sedd, förstådd och hållen i
                terapirummet, ökar chansen för verklig förändring. Därför är
                mitt mål att du ska känna att du inte längre är ensam med det
                som är svårt.
              </p>
              <p>Jag arbetar med flera evidensbaserade metoder, bland annat:</p>
              <ul
                className="list-disc pl-5 space-y-1"
                aria-label="Mina terapimetoder"
              >
                <li>Affektfokuserad psykodynamisk terapi (AFT)</li>
                <li>Accelerated Experiential Dynamic Psychotherapy (AEDP)</li>
                <li>Emotionellt fokuserad terapi (EFT)</li>
                <li>Kognitiv beteendeterapi (KBT)</li>
              </ul>
              <p>
                Gemensamt för dem är att de fokuserar på känslor, relationer och
                mening – och att förändring sker när vi i en trygg relation
                vågar närma oss det som känns. I terapin får du stöd att förstå
                dig själv bättre, bearbeta det som gör ont, och hitta nya sätt
                att förhålla dig till dig själv och andra.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link
                  href="#contact"
                  aria-label="Gå till kontaktformulär för att boka tid"
                >
                  Boka tid
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-full md:h-auto aspect-square rounded-full overflow-hidden border-8 border-background shadow-xl">
              <Image
                src="/images/therapist.jpg"
                alt="Tomas Thiel Hultcrantz, Legitimerad psykoterapeut"
                fill
                priority
                className="object-cover"
                fetchPriority="high"
                sizes="(max-width: 768px) 256px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
