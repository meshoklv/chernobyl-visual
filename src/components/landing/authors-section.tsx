
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle2 } from 'lucide-react';

const authors = [
  "Назарян Карен",
  "Попова Ростислава",
  "Борзов Михаил",
  "Брунько Мария",
  "Мышенков Фёдор"
];

export function AuthorsSection() {
  return (
    <section id="authors" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-12">Команда исследователей</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {authors.map((author, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-lg text-center p-6 rounded-lg transition-all duration-300 hover:shadow-primary/30 hover:shadow-2xl transform hover:-translate-y-1">
              <CardHeader className="p-0 mb-4 flex items-center justify-center">
                <UserCircle2 className="w-24 h-24 text-primary border-4 border-primary rounded-full p-1" />
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="font-body text-xl font-medium">{author}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

