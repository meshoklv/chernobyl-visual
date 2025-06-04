import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, FileText } from 'lucide-react';

export function MethodologySection() {
  return (
    <section id="methodology" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card text-card-foreground shadow-xl p-6 md:p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
          <CardHeader className="text-center pb-6">
            <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">Наш подход к исследованию</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-body text-base md:text-lg leading-relaxed text-center mb-10 max-w-3xl mx-auto">
              В данном исследовании использовался метод опроса для изучения дискуссий вокруг сериала "Чернобыль" (HBO) и их влияния на формирование конфликтных дискурсов. Опрос позволил получить качественные и количественные данные.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <Card className="bg-muted/50 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-headline text-xl font-semibold mb-1">Всего опрошено</h3>
                <p className="font-body text-4xl font-bold text-primary">30</p>
                <p className="font-body text-sm text-muted-foreground">респондентов</p>
              </Card>
              <Card className="bg-muted/50 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-headline text-xl font-semibold mb-1">Молодежь (18–30 лет)</h3>
                <p className="font-body text-4xl font-bold text-primary">15</p>
                <p className="font-body text-sm text-muted-foreground">человек</p>
              </Card>
              <Card className="bg-muted/50 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-headline text-xl font-semibold mb-1">Взрослые (31–60 лет)</h3>
                <p className="font-body text-4xl font-bold text-primary">15</p>
                <p className="font-body text-sm text-muted-foreground">человек</p>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
