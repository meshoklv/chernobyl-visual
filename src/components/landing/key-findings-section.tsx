"use client";
import { Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, Legend as RechartsLegend, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart } from 'recharts'; // Renamed BarChart to RechartsBarChart and added PieChart
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { Atom } from 'lucide-react';

const chartConfigYouth: ChartConfig = {
  youthPositive: {
    label: "Высокая оценка (Молодежь)",
    color: "hsl(var(--chart-1))",
  },
};

const chartConfigOlder: ChartConfig = {
  olderCritical: {
    label: "Средняя/низкая оценка (Старшее поколение)",
    color: "hsl(var(--chart-2))",
  },
};

const chartConfigInterest: ChartConfig = {
  increasedInterest: {
    label: "Укрепился интерес",
    color: "hsl(var(--chart-1))",
  },
  other: {
    label: "Другое",
    color: "hsl(var(--muted))",
  },
};

export function KeyFindingsSection() {
  const youthData = [{ name: "Молодежь (18-34)", youthPositive: 62 }];
  const olderData = [{ name: "Старшее поколение (55+)", olderCritical: 40 }];
  const interestData = [
    { name: "Укрепился интерес", value: 49, fill: "var(--color-increasedInterest)" },
    { name: "Другое", value: 51, fill: "var(--color-other)" },
  ];

  return (
    <section id="key-findings" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-12">Что показал наш опрос?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Эмоциональное восприятие молодежи</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-primary mb-2">62%</div>
              <p className="font-body text-base md:text-lg mb-4">молодежи (18-34 лет) высоко оценили сериал, отметив эмоциональную вовлечённость и качество актёрской игры.</p>
              <ChartContainer config={chartConfigYouth} className="h-[200px] w-full">
                <RechartsBarChart accessibilityLayer data={youthData} layout="vertical" margin={{ left: 20, right: 20}}>
                  <XAxis type="number" dataKey="youthPositive" hide />
                  <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={150}/>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <RechartsLegend content={<ChartLegendContent />} />
                  <Bar dataKey="youthPositive" fill="var(--color-youthPositive)" radius={5} />
                </RechartsBarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent" style={{color: "hsl(var(--chart-2))"}}>Критика старшего поколения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-accent mb-2" style={{color: "hsl(var(--chart-2))"}}>40%</div>
              <p className="font-body text-base md:text-lg mb-4">старшего поколения (особенно 55 лет и старше) дали сериалу среднюю или низкую оценку, акцентируя внимание на важности исторической точности.</p>
              <ChartContainer config={chartConfigOlder} className="h-[200px] w-full">
                 <RechartsBarChart accessibilityLayer data={olderData} layout="vertical" margin={{ left: 20, right: 20}}>
                  <XAxis type="number" dataKey="olderCritical" hide />
                  <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={200}/>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <RechartsLegend content={<ChartLegendContent />} />
                  <Bar dataKey="olderCritical" fill="var(--color-olderCritical)" radius={5} />
                </RechartsBarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Влияние на интерес к ядерной безопасности</CardTitle>
              <CardDescription className="flex items-center gap-2"><Atom className="w-5 h-5"/>Общий интерес</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-primary mb-2">Более 49%</div>
              <p className="font-body text-base md:text-lg mb-4">всех респондентов подчеркнули, что сериал укрепил их интерес к теме ядерной безопасности.</p>
              <ChartContainer config={chartConfigInterest} className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={interestData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} labelLine={false} label={({ percent }) => `${(percent * 100).toFixed(0)}%`}>
                           {interestData.map((entry) => (
                            <Cell key={`cell-${entry.name}`} fill={entry.fill as string} />
                          ))}
                        </Pie>
                        <RechartsLegend content={<ChartLegendContent />} />
                    </RechartsPieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Зависимость восприятия от опыта</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-full">
              <div className="text-7xl font-bold text-primary mb-4">61%</div>
              <p className="font-body text-base md:text-lg text-center">участников согласились с тем, что восприятие сериала сильно зависит от личного опыта и знаний о катастрофе до просмотра.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
