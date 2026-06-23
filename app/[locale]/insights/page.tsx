import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { insights } from "@/lib/data/insights";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function InsightsIndexPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = dictionaries[locale];

  return (
    <>
      <SiteHeader dictionary={dictionary} locale={locale} />
      <main className="bg-background min-h-screen pt-32 pb-24">
        <div className="container-page mx-auto px-4">
          
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
              Engineering Insights
            </h1>
            <p className="text-xl text-neutral-400">
              Technical guides, architecture blueprints, and growth strategies from our internal engineering team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <Link key={insight.id} href={`/${locale}/insights/${insight.slug}`} className="group flex flex-col h-full bg-navy-950 border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-colors">
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent">
                      {insight.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-techBlue transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6 flex-grow">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                    <div className="flex items-center text-xs text-neutral-500 gap-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {insight.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {insight.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </>
  );
}
