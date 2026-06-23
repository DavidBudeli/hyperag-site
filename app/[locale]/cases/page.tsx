import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { cases } from "@/lib/data/cases";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function CasesIndexPage({ params }: PageProps) {
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
              {dictionary.cases.title}
            </h1>
            <p className="text-xl text-neutral-400">
              {dictionary.cases.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((c) => (
              <Link key={c.id} href={`/${locale}/cases/${c.slug}`} className="group block">
                <div className="h-64 rounded-t-3xl border border-b-0 border-white/10 bg-navy-900 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-techBlue/20 via-transparent to-transparent opacity-50" />
                  <div className="absolute top-6 left-6 z-20 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                    {c.industry}
                  </div>
                </div>
                <div className="p-8 rounded-b-3xl border border-white/10 bg-navy-950 glass-surface group-hover:border-accent/30 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-neutral-400 mb-6 line-clamp-2">
                    {c.excerpt}
                  </p>
                  <div className="flex items-center text-sm font-medium text-white group-hover:text-accent transition-colors">
                    Read full case <ArrowRight className="w-4 h-4 ml-2" />
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
