import { Card, CardContent } from '@/components/ui/card';
import { Brain, Heart, Lightbulb, Sparkles } from 'lucide-react';

export default function Methods() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mina terapeutiska metoder
          </h2>
          <p className="text-xl text-muted-foreground">
            Jag arbetar med flera evidensbaserade metoder som anpassas efter
            dina behov och mål.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Method 1 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Heart className="size-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Affektfokuserad psykodynamisk terapi (AFT)
              </h3>
              <p className="text-muted-foreground mb-4 text-center">
                En terapiform som kombinerar psykodynamiska och KBT-terapeutiska
                principer för att hjälpa dig att övervinna "affektfobier" -
                rädslor och undvikanden som uppstått genom tidigare
                erfarenheter.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Bygger på anknytningsteori</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Hjälper dig hantera känslor du tidigare undvikit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Skapar nya, mer konstruktiva känslomönster</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Method 2 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Brain className="size-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Accelerated Experiential Dynamic Psychotherapy (AEDP)
              </h3>
              <p className="text-muted-foreground mb-4 text-center">
                AEDP betonar att det inom varje människa finns en inneboende
                kapacitet till läkning och motståndskraft. Terapeuten fungerar
                som en aktiv, stöttande guide som är med dig varje steg på
                vägen.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Skapar en trygg bas i terapirummet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Utforskar gradvis smärtsamma känslor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Stärker dina friska, motståndskraftiga sidor</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Method 3 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Sparkles className="size-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Emotionellt fokuserad terapi (EFT)
              </h3>
              <p className="text-muted-foreground mb-4 text-center">
                EFT utgår från att alla våra känslor rymmer information. De
                signalerar vad vi behöver eller vad som är viktigt för oss.
                EFT-terapi hjälper dig att komma bakom sekundära känslor och
                hitta kärnan.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Skiljer mellan primära och sekundära känslor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Förändrar maladaptiva känslomönster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ersätter smärtsamma känslor med läkande känslor</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Method 4 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Lightbulb className="size-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Kognitiv beteendeterapi (KBT)
              </h3>
              <p className="text-muted-foreground mb-4 text-center">
                När vi fastnar i självkritik, stress eller undvikanden som gör
                livet mindre levande, kan KBT hjälpa oss att få syn på de
                mönster vi fastnat i och steg för steg skapa förändring.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    ACT: Hjälper dig fokusera på det som är viktigt för dig
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Schematerapi: Går på djupet med upprepande livsmönster
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Compassionfokuserad terapi: För självkritik och skam
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
