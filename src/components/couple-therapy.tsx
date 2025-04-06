import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function CoupleTherapy() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col items-center mb-8">
                <div className="p-4 bg-primary/10 rounded-full mb-6">
                  <Heart className="size-12 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                  Parterapi
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  För att hålla en relation vid liv behöver vi lägga ner tid och
                  engagemang. Efter förelskefasen när vardagen gör sig påmind är
                  det lätt att glida isär och tappat det man en gång fastnade
                  för. Svårigheter i en parrelation uppstår ofta när vi har
                  tappat förmågan att kommunicera. Känslan av samhörighet har
                  gått förlorad.
                </p>
                <p>
                  Förlust av känslomässig trygghet gör att vi känner oss
                  ensamma, ledsna och arga, vilket kan leda till att vi
                  kritiserar varandra och missförstår varandra.
                </p>
                <p>
                  Vanliga teman för parterapi är bekymmer med tillit, lyhördhet,
                  engagemang.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
