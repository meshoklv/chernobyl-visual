
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Podcast, Video, BookOpenText } from 'lucide-react';

export function AdditionalMaterialsSection() {
  return (
    <section id="additional-materials" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
          <CardHeader className="text-center pb-6">
            <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">Дополнительные материалы</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-6 md:gap-8">
            <Link href="https://drive.google.com/file/d/11ni6hTAyVXlwCHSnTnZfwmGjj0lydPKr/view?usp=sharing" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="default" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] w-full sm:w-auto"
                >
                  <Podcast className="mr-2 h-5 w-5" />
                  Слушать подкаст
                </Button>
              </a>
            </Link>
            <Link href="https://drive.google.com/file/d/1_Ly2S4PuT9DLXOl_DabDlZsTE186AcFa/view?usp=sharing" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)] w-full sm:w-auto"
                >
                  <Video className="mr-2 h-5 w-5" />
                  Смотреть видео
                </Button>
              </a>
            </Link>
            <Link href="/longread" passHref>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)] w-full sm:w-auto"
              >
                <BookOpenText className="mr-2 h-5 w-5" />
                Читать лонгрид
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
