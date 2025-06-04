import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="/video/Pripyat_Amusement_Park_Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          ДИСКУССИИ ВОКРУГ СЕРИАЛА "ЧЕРНОБЫЛЬ" (HBO): КАК ОН ИЗМЕНИЛ ВОСПРИЯТИЕ КАТАСТРОФЫ
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Исследование влияния художественной интерпретации на формирование исторической памяти и конфликтных дискурсов среди различных социальных групп.
        </p>
        <Link href="#introduction" passHref>
          <Button 
            size="lg" 
            variant="default" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)]"
          >
            Узнать больше
          </Button>
        </Link>
      </div>
    </section>
  );
}
