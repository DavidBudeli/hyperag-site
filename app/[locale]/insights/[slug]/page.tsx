import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getInsightBySlug } from "@/lib/data/insights";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

// Next.js static generation
export async function generateStaticParams() {
  const { insights } = await import("@/lib/data/insights");
  const locales = ["pt-BR", "en-US"];
  
  const params = [];
  for (const locale of locales) {
    for (const insight of insights) {
      params.push({ locale, slug: insight.slug });
    }
  }
  return params;
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const dictionary = dictionaries[locale];

  return (
    <>
      <SiteHeader dictionary={dictionary} locale={locale} />
      <main className="bg-background min-h-screen pt-32 pb-24">
        <div className="container-page mx-auto px-4 max-w-3xl">
          
          <Link href={`/${locale}/insights`} className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>

          <article>
            <div className="mb-12">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-accent mb-6 inline-block">
                {insight.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
                {insight.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-neutral-400 border-y border-white/10 py-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-neutral-500" />
                  {insight.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-neutral-500" />
                  {insight.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-neutral-500" />
                  {insight.readTime}
                </div>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-neutral-300 leading-relaxed">
              <p className="text-xl font-medium text-white mb-8">
                {insight.excerpt}
              </p>
              
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 mt-8 text-neutral-400">
                {insight.content}
              </div>
            </div>
          </article>

        </div>
      </main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </>
  );
}
