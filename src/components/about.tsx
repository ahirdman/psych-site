import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section
      className="py-20 bg-muted/30"
      aria-labelledby="psykoterapi-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2
            id="psykoterapi-heading"
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            Psykoterapi
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="mb-12">
            <CardContent className="p-6">
              <h3 id="metoder-heading" className="text-xl font-semibold mb-4">
                Metoder jag använder
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <h4 className="font-medium" id="aft-heading">
                  Affektfokuserad/ affektfobiterapi (AFT)
                </h4>
                <p>
                  En terapiform som kombinerar psykodynamiska och KBT-
                  terapeutiska principer för att hjälpa dig att övervinna
                  "affektfobier" som tex rädslor och undvikanden som uppstått
                  genom tidigare erfarenheter. AFT bygger mycket på
                  anknytningsteori, det vill säga hur våra tidiga relationer
                  påverkar vårt sätt att hantera känslor. Om man som barn inte
                  fick visa vissa känslor (till exempel ilska eller ledsenhet)
                  kan man utveckla ett slags "affektfobi", en rädsla för de
                  känslorna, även i vuxen ålder.
                </p>

                <h4 className="font-medium" id="aedp-heading">
                  Accelerated experiential dynamic psychotherapy (AEDP)
                </h4>
                <p>
                  AEDP är en terapiform som har rötter i den psykodynamiska
                  skolan och fokuserar på att skapa en trygg terapeutisk
                  relation där du kan uppleva och förändra smärtsamma känslor.
                </p>
                <p>
                  AEDP är, precis som AFT, en affektfokuserad och relationell
                  terapi, men den betonar särskilt att det inom varje människa
                  finns en inneboende kapacitet till läkning och motståndskraft.
                  Trots att vi kan ha blivit sårade och skadade tidigare i
                  livet, finns det delar inom oss som är starka och har överlevt
                  även det svåra. AEDP går ut på att hjälpa dig upptäcka och
                  stärka dessa friska, motståndskraftiga sidor hos dig själv,
                  samtidigt som vi bearbetar det som gör ont.
                </p>
                <p>
                  Terapeuten fungerar här som en aktiv, stöttande guide som är
                  med dig varje steg på vägen, så att du slipper möta de jobbiga
                  känslorna ensam. En nyckel i AEDP är just att skapa en trygg
                  bas i terapirummet, där du känner dig så pass sedd och hörd
                  att du vågar släppa ner garden. När du känner dig trygg med
                  terapeuten kan försvarsmekanismerna sakta slappna av – de där
                  skydden vi alla kan bygga upp, ofta redan i barndomen, för att
                  slippa känna det som gjort för ont.
                </p>
                <p>
                  I AEDP utforskar vi gradvis de smärtsamma känslor som ligger
                  under dina symtom. Det kan handla om att sörja förluster, att
                  våga känna vrede över orättvisor du varit med om, eller att
                  sätta ord på skam och rädsla som kanske har funnits där sedan
                  länge. Allt detta sker varsamt och lyhört, i den takt du är
                  redo för.
                </p>

                <h4 className="font-medium" id="eft-heading">
                  Emotion Focused Therapy (EFT)
                </h4>
                <p>
                  En central idé i EFT är att alla våra känslor rymmer
                  information. De signalerar vad vi behöver eller vad som är
                  viktigt för oss, men betonar också att inte alla
                  känsloreaktioner är hjälpsamma. Ibland kan en känsla dölja en
                  annan: vi kanske visar ilska utåt för att vi egentligen känner
                  oss ledsna eller sårade inuti. Den synliga ilskan är då en
                  sekundärkänsla, medan den djupare sorgen är en primär känsla.
                </p>
                <p>
                  EFT-terapi hjälper dig att komma bakom de sekundära känslorna
                  och hitta kärnan, den primära, äkta känslan som behöver
                  uppmärksamhet och förståelse för att du ska kunna läka. Vissa
                  av våra invanda känslomönster kan vara "maladaptiva", det vill
                  säga att de en gång kanske skyddade oss, men att de idag mest
                  ställer till det för oss. Till exempel kan man på grund av
                  tidigare erfarenheter bära med sig en ständig känsla av att
                  inte räcka till eller ha en gnagande oro för att bli
                  övergiven. Sådana känslor är inte längre hjälpsamma – de gör
                  bara att vi mår dåligt i onödan och fastnar i negativa
                  cirklar.
                </p>
                <p>
                  I terapin fokuserar vi på att förändra dessa djupa, smärtsamma
                  känslor genom att låta dig uppleva nya, läkande känslor i
                  stället. Till exempel kan en förlamande känsla av skam så
                  småningom bytas ut mot självmedkänsla och hopp, med
                  terapeutens hjälp. När du vågar ge plats även åt svåra känslor
                  i en trygg omgivning, kan de börja släppa taget och ersättas
                  av mer konstruktiva känslor som stärker dig.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 id="kbt-heading" className="text-xl font-semibold mb-4">
                Om KBT
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ibland vet vi vad vi känner och tänker, men fastnar ändå i
                  självkritik, stress eller undvikanden som gör livet mindre
                  levande. Då kan det vara hjälpsamt att få syn på de mönster vi
                  fastnat i, och steg för steg skapa förändring.
                </p>
                <p>Jag arbetar med:</p>
                <div className="space-y-6 mt-4">
                  <div className="border-l-4 border-primary/20 pl-4 py-2">
                    <h4 className="font-medium" id="act-heading">
                      ACT (Acceptance and Commitment Therapy)
                    </h4>
                    <p className="mt-2">
                      Hjälper dig att släppa kampen mot obehag och i stället
                      fokusera på det som är viktigt för dig. Vi utforskar vad
                      du vill stå för i livet – och hur du kan ta steg dit, även
                      om svåra känslor finns med på vägen.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary/20 pl-4 py-2">
                    <h4 className="font-medium" id="schema-heading">
                      Schematerapi
                    </h4>
                    <p className="mt-2">
                      Går på djupet med de livsmönster som ofta upprepas i
                      relationer eller gentemot dig själv. Vi kartlägger,
                      bearbetar och förändrar sådant som kanske kommer från
                      tidigare erfarenheter – t.ex. känslan av att inte duga,
                      att bli övergiven eller behöva prestera för att få kärlek.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary/20 pl-4 py-2">
                    <h4 className="font-medium" id="cft-heading">
                      Compassionfokuserad terapi (CFT)
                    </h4>
                    <p className="mt-2">
                      För dig som brottas med självkritik, skam eller en hård
                      inre röst. Här tränar vi på att bygga upp en mer vänlig
                      och stöttande relation till dig själv, med hjälp av
                      medkänsla, trygghet och självomsorg.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
