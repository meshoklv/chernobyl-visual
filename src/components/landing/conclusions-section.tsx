import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ListChecks } from 'lucide-react';

export function ConclusionsSection() {
  const conclusions = [
    "Сериал «Чернобыль» (HBO) существенно повлиял на восприятие катастрофы и формирование коллективной памяти.",
    "Молодежь восприняла его как ключевой источник информации, но художественная драматизация привела к рискам искажения фактов.",
    "Старшее поколение, более критичное к точности, признало вклад сериала в популяризацию темы катастрофы и ядерной безопасности.",
    "Сериал стал катализатором обсуждений сложных вопросов, формируя индивидуальные и коллективные представления о трагедии.",
    "Это подчеркивает важность создания медийных продуктов, сочетающих художественную выразительность с исторической достоверностью."
  ];

  return (
    <section id="conclusions" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center space-x-4 pb-4">
            <CheckCircle2 className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">Главные итоги нашего исследования</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {conclusions.map((conclusion, index) => (
                <li key={index} className="flex items-start font-body text-base md:text-lg leading-relaxed">
                  <ListChecks className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>{conclusion}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
