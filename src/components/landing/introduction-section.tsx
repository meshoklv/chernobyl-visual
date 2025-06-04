import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export function IntroductionSection() {
  return (
    <section id="introduction" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center space-x-4 pb-4">
            <Brain className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">Почему это исследование важно?</CardTitle>
          </CardHeader>
          <CardContent className="font-body text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Чернобыльская катастрофа оставила глубокий след в истории и коллективной памяти. В современном мире медийные продукты, такие как сериал "Чернобыль" (HBO), играют значимую роль в формировании восприятия таких событий. Вышедший в мае 2019 года сериал вызвал широкий общественный резонанс, породив дискуссии среди молодежи, взрослых и экспертов.
            </p>
            <p>
              Актуальность исследования обусловлена влиянием массовой культуры на восприятие исторических событий, особенно среди молодежи, для которой художественные интерпретации становятся основным источником знаний о прошлом. Драматизация и акцентирование отдельных аспектов часто вызывают противоречивые реакции, формируя конфликтные дискурсы между социальными группами.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
