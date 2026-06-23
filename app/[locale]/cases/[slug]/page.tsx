import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getCaseBySlug } from "@/lib/data/cases";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

// Next.js static generation
export async function generateStaticParams() {
  const { cases } = await import("@/lib/data/cases");
  const locales = ["pt-BR", "en-US"];
  
  const params = [];
  for (const locale of locales) {
    for (const c of cases) {
      params.push({ locale, slug: c.slug });
    }
  }
  return params;
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const caseData = getCaseBySlug(slug);
  if (!caseData) notFound();

  const dictionary = dictionaries[locale];

  return (
    <>
      <SiteHeader dictionary={dictionary} locale={locale} />
      <main className="bg-background min-h-screen pt-32 pb-24">
        <div className="container-page mx-auto px-4 max-w-4xl">
          
          <Link href={`/${locale}/cases`} className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Cases
          </Link>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-accent">
                {caseData.industry}
              </span>
              <span className="text-sm font-medium text-neutral-500">Client: {caseData.client}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
              {caseData.title}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl glass-surface border-white/10 bg-navy-950/80 mb-16">
              {caseData.metrics.map((m, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-3xl font-bold text-white mb-2">{m.value}</div>
                  <div className="text-sm font-medium text-neutral-400 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4 mt-12">The Problem</h2>
            <p className="text-neutral-300 leading-relaxed">{caseData.content.problem}</p>
            
            <h2 className="text-2xl font-semibold text-white mb-4 mt-12">The Solution</h2>
            <p className="text-neutral-300 leading-relaxed">{caseData.content.solution}</p>
            
            <h2 className="text-2xl font-semibold text-white mb-4 mt-12">Implementation</h2>
            <p className="text-neutral-300 leading-relaxed">{caseData.content.implementation}</p>
            
            <h2 className="text-2xl font-semibold text-white mb-4 mt-12">The Result</h2>
            <p className="text-neutral-300 leading-relaxed">{caseData.content.result}</p>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-sm font-medium uppercase text-neutral-500 mb-4">Tech Stack Utilized</h3>
            <div className="flex flex-wrap gap-3">
              {caseData.techStack.map((tech, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-navy-900 border border-white/10 text-sm font-medium text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </>
  );
}
