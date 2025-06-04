
import { HeroSection } from '@/components/landing/hero-section';
import { IntroductionSection } from '@/components/landing/introduction-section';
import { ProblemGoalSection } from '@/components/landing/problem-goal-section';
import { MethodologySection } from '@/components/landing/methodology-section';
import { KeyFindingsSection } from '@/components/landing/key-findings-section';
import { AnalysisSection } from '@/components/landing/analysis-section';
import { SurveySection } from '@/components/landing/survey-section';
import { ConclusionsSection } from '@/components/landing/conclusions-section';
import { AdditionalMaterialsSection } from '@/components/landing/additional-materials-section';
import { AuthorsSection } from '@/components/landing/authors-section';
import { FooterSection } from '@/components/landing/footer-section';
import { HeaderSection } from '@/components/landing/header-section';
import { Separator } from '@/components/ui/separator';

export default function ChernobylLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeaderSection />
      <main className="flex-grow pt-[calc(4rem+1px)]"> {/* Adjust pt if header height changes */}
        <HeroSection />
        <Separator className="my-4 opacity-50 md:my-6" />
        <IntroductionSection />
        <Separator className="my-4 opacity-50 md:my-6" />
        <ProblemGoalSection />
        <Separator className="my-4 opacity-50 md:my-6" />
        <MethodologySection />
        <Separator className="my-4 opacity-50 md:my-6" />
        <KeyFindingsSection />
        <Separator className="my-4 opacity-50 md:my-6" />
        <AnalysisSection />
        <Separator className="my-4 opacity-50 md:my-6" />
        <SurveySection />
        <Separator className="my-4 opacity-50 md:my-6" />
        <ConclusionsSection />
        <Separator className="my-4 opacity-50 md:my-6" />
        <AdditionalMaterialsSection />
        <Separator className="my-4 opacity-50 md:my-6" />
        <AuthorsSection />
      </main>
      <FooterSection />
    </div>
  );
}
