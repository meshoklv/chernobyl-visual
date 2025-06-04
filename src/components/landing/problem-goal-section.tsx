import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Target } from 'lucide-react';

export function ProblemGoalSection() {
  return (
    <section id="problem-goal" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
          <CardHeader className="pb-4">
            <CardTitle className="font-headline text-3xl md:text-4xl font-semibold text-center">Что мы хотели выяснить?</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <HelpCircle className="w-8 h-8 text-primary" />
                <h3 className="font-headline text-2xl font-semibold">Проблема исследования</h3>
              </div>
              <p className="font-body text-base md:text-lg leading-relaxed">
                Проблема исследования заключается в недостаточном понимании того, как художественные интерпретации исторических событий, такие как сериал "Чернобыль" (HBO), влияют на восприятие катастрофы и формирование исторической памяти среди различных социальных групп. Каким образом художественные акценты и авторские интерпретации воздействуют на общественное восприятие и формируют конфликтные дискурсы?
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="font-headline text-2xl font-semibold">Цель исследования</h3>
              </div>
              <p className="font-body text-base md:text-lg leading-relaxed">
                Целью данного исследования является изучение влияния художественной интерпретации событий, представленных в сериале "Чернобыль" (HBO), на восприятие Чернобыльской катастрофы различными социальными группами, а также выявление возникающих конфликтных дискурсов.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
