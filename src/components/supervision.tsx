import { Card, CardContent } from '@/components/ui/card';
import { User, Users } from 'lucide-react';

export default function Supervision() {
  return (
    <section
      className="py-20 bg-muted/30"
      aria-labelledby="supervision-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="supervision-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Handledning
          </h2>
          <p className="text-xl text-muted-foreground">
            Handledning är en viktig del i utvecklingen för psykoterapeuter och
            andra yrkesverksamma inom vård och behandling. Genom handledning får
            du möjlighet att reflektera över ditt arbete, fördjupa din
            förståelse för terapeutiska processer och utveckla din
            professionella roll.
          </p>
          <p className="text-xl text-muted-foreground mt-4">
            Jag erbjuder handledning baserad på både affektfokuserade och
            kognitivt beteendeterapeutiska metoder, anpassad efter dina behov
            och din terapeutiska inriktning. Jag har ett systemiskt perspektiv
            kring ärenden, med förståelse för hur olika människor har skiftande
            förutsättningar i samhället utifrån rådande normer och strukturer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6" aria-hidden="true">
                <div className="p-3 bg-primary/10 rounded-full">
                  <User className="size-8 text-primary" />
                </div>
              </div>
              <h3
                id="individual-supervision-heading"
                className="text-xl font-semibold text-center mb-4"
              >
                Individuell handledning
              </h3>
              <p className="text-muted-foreground">
                Individuell handledning ger dig ett skräddarsytt stöd där vi
                fokuserar på dina specifika ärenden, terapeutiska utmaningar och
                professionella utveckling. Vi kan arbeta med kliniska
                frågeställningar, metodutveckling och egen reflektion för att
                stärka dig i din roll som terapeut. Handledningen erbjuder en
                trygg och fördjupande process där vi tillsammans utforskar och
                utvecklar ditt terapeutiska arbete.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center mb-6" aria-hidden="true">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="size-8 text-primary" />
                </div>
              </div>
              <h3
                id="group-supervision-heading"
                className="text-xl font-semibold text-center mb-4"
              >
                Grupphandledning
              </h3>
              <p className="text-muted-foreground">
                Grupphandledning ger möjlighet till reflektion och lärande i
                samspel med kollegor. Genom att dela erfarenheter och diskutera
                olika perspektiv skapas en dynamisk process som berikar både den
                individuella och gemensamma kompetensen. Grupphandledning kan
                erbjudas till team inom exempelvis vård, skola eller socialt
                arbete och anpassas utifrån gruppens behov, vare sig det handlar
                om metodfördjupning, ärendehandledning eller professionell
                utveckling.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground">
            Jag erbjuder handledning till yrkesverksamma inom kommunala och
            regionala verksamheter, primärvård, HVB, familjehem,
            ungdomsmottagningar samt organisationer.
          </p>
        </div>
      </div>
    </section>
  );
}
