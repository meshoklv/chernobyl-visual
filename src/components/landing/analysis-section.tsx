import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export function AnalysisSection() {
  return (
    <section id="analysis" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center space-x-4 pb-4">
            <Scale className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">Два взгляда на "Чернобыль": Почему мнения разделились?</CardTitle>
          </CardHeader>
          <CardContent className="font-body text-base md:text-lg leading-relaxed space-y-6">
            <p>
              Исследование выявило различные подходы к интерпретации сериала.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-headline text-xl font-semibold text-primary mb-2">Восприятие молодежи</h3>
                <p>
                  Молодежь чаще воспринимает сериал как эмоционально насыщенное и информативное произведение, принимая его содержание за основу понимания трагедии. Для этой группы характерен акцент на драматизации и визуальной выразительности.
                </p>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold text-primary mb-2">Восприятие взрослой аудитории</h3>
                <p>
                  Взрослая аудитория, особенно те, кто имел знание о событиях, относится к сериалу с большей критичностью, акцентируя внимание на исторической точности и возможных искажениях фактов.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
