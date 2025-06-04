import { Aperture } from 'lucide-react'; // Using Aperture as a placeholder logo icon

export function HeaderSection() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-card/80 backdrop-blur-md shadow-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Aperture className="w-8 h-8 text-primary" />
          <span className="font-headline text-xl font-semibold text-foreground">
            Анализ дискурса о Чернобыле (HBO)
          </span>
        </div>
        {/* Navigation links can be added here if needed in the future */}
      </div>
    </header>
  );
}
