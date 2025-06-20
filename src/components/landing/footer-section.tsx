
"use client";

import { useState, useEffect } from 'react';

export function FooterSection() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-body text-sm">
          &copy; {currentYear !== null ? currentYear : ''} Анализ дискурса о Чернобыле (HBO).
        </p>
      </div>
    </footer>
  );
}
