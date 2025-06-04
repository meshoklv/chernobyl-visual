
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const q1Options = [
  { id: "q1o1", value: "Сильное эмоциональное потрясение", label: "Сильное эмоциональное потрясение" },
  { id: "q1o2", value: "Заставил задуматься об истории и последствиях", label: "Заставил задуматься об истории и последствиях" },
  { id: "q1o3", value: "Интересный, но с художественными преувеличениями", label: "Интересный, но с художественными преувеличениями" },
  { id: "q1o4", value: "Не смотрел(а) / Нет ярких впечатлений", label: "Не смотрел(а) / Нет ярких впечатлений" },
  { id: "q1o5", value: "Другое (поделитесь в мыслях)", label: "Другое (поделитесь в мыслях)" },
];

const q2Options = [
  { id: "q2o1", value: "Очень точно, почти документально", label: "Очень точно, почти документально" },
  { id: "q2o2", value: "В целом точно, но с некоторыми допущениями", label: "В целом точно, но с некоторыми допущениями" },
  { id: "q2o3", value: "Много художественного вымысла и искажений", label: "Много художественного вымысла и искажений" },
  { id: "q2o4", value: "Сложно судить, не знаю деталей истории", label: "Сложно судить, не знаю деталей истории" },
];

export function SurveySection() {
  const [q1Answer, setQ1Answer] = useState<string | undefined>(undefined);
  const [q2Answer, setQ2Answer] = useState<string | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (q1Answer && q2Answer) {
      setSubmitted(true);
    } else {
      // Можно добавить более изящное уведомление, если потребуется
      alert("Пожалуйста, ответьте на все вопросы.");
    }
  };

  return (
    <section id="survey" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center space-x-4 pb-4">
            <MessageSquare className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">
              Ваше мнение: Как "Чернобыль" (HBO) повлиял на вас?
            </CardTitle>
          </CardHeader>
          <CardContent className="font-body text-base md:text-lg leading-relaxed space-y-8">
            {!submitted ? (
              <>
                <p className="text-center mb-8">
                  Сериал "Чернобыль" вызвал множество эмоций и дискуссий. Поделитесь своим впечатлением!
                </p>
                
                <div className="space-y-10">
                  <div>
                    <p className="font-semibold mb-4 text-lg">Какое ваше основное впечатление от сериала "Чернобыль" (HBO)?</p>
                    <RadioGroup value={q1Answer} onValueChange={setQ1Answer} className="space-y-3">
                      {q1Options.map((option) => (
                        <div key={option.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value={option.value} id={option.id} className="w-5 h-5"/>
                          <Label htmlFor={option.id} className="cursor-pointer text-base">{option.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <p className="font-semibold mb-4 text-lg">Насколько сериал, по-вашему, точно отразил исторические события?</p>
                    <RadioGroup value={q2Answer} onValueChange={setQ2Answer} className="space-y-3">
                      {q2Options.map((option) => (
                        <div key={option.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value={option.value} id={option.id} className="w-5 h-5"/>
                          <Label htmlFor={option.id} className="cursor-pointer text-base">{option.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button 
                    onClick={handleSubmit} 
                    size="lg" 
                    disabled={!q1Answer || !q2Answer}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Отправить ответы
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="font-headline text-3xl font-semibold text-primary mb-6">Спасибо за ваше мнение!</h3>
                <p className="text-xl">Ваши ответы важны для нас и помогают лучше понять общественное восприятие.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

