import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroCinematic } from "@/components/sections/hero-cinematic";
import { LogoCarousel } from "@/components/sections/logo-carousel";
import { ExecutiveSummary } from "@/components/sections/executive-summary";
import { AuthorityProof } from "@/components/sections/authority-proof";
import { WhyHyperAg } from "@/components/sections/why-hyperag";
import { BentoCapabilities } from "@/components/sections/bento-capabilities";
import { CreativeProduction } from "@/components/sections/creative-production";
import { Industries } from "@/components/sections/industries";
import { RevenueImpact } from "@/components/sections/revenue-impact";
import { ProcessFlow } from "@/components/sections/process-flow";
import { Comparative } from "@/components/sections/comparative";
import { TrustLayer } from "@/components/sections/trust-layer";
import { CasesPreview } from "@/components/sections/cases-preview";
import { TechStack } from "@/components/sections/tech-stack";
import { EcosystemPreview } from "@/components/sections/ecosystem-preview";
import { AssessmentCTA } from "@/components/sections/assessment-cta";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = dictionaries[locale];

  return (
    <>
      <SiteHeader dictionary={dictionary} locale={locale} />
      <main className="bg-background min-h-screen">
        <HeroCinematic dictionary={dictionary} locale={locale} />
        <LogoCarousel />
        <ExecutiveSummary dictionary={dictionary} />
        <AuthorityProof dictionary={dictionary} />
        <WhyHyperAg dictionary={dictionary} />
        <BentoCapabilities dictionary={dictionary} />
        <CreativeProduction dictionary={dictionary} />
        <Industries dictionary={dictionary} locale={locale as Locale} />
        <RevenueImpact dictionary={dictionary} />
        <ProcessFlow dictionary={dictionary} />
        <Comparative dictionary={dictionary} />
        <TrustLayer dictionary={dictionary} />
        <CasesPreview dictionary={dictionary} locale={locale as Locale} />
        <TechStack dictionary={dictionary} />
        <EcosystemPreview dictionary={dictionary} />
        <AssessmentCTA dictionary={dictionary} locale={locale as Locale} />
        
        {/* Final CTA */}
        <section className="py-32 relative bg-navy-950 overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-techBlue/10 via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="container-page mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
              {dictionary.book.title}
            </h2>
            <p className="text-xl text-neutral-400 mb-12">
              {dictionary.book.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href={`/${locale}/book`}
                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors w-full sm:w-auto flex justify-center items-center gap-2"
              >
                {dictionary.book.form.submit}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href={dictionary.cta.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
              >
                {dictionary.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </>
  );
}
