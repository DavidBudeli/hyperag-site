import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Cpu } from "lucide-react";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AIAutomationPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = dictionaries[locale];

  return (
    <>
      <SiteHeader dictionary={dictionary} locale={locale} />
      <main className="bg-black min-h-screen pt-32 pb-24">
        <div className="container-page mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <Cpu className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
              {dictionary.solutions.ai.title}
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
              {dictionary.solutions.ai.description}
            </p>
          </div>
          <div className="mt-20 h-[400px] w-full rounded-2xl border border-white/10 bg-neutral-900/50 flex items-center justify-center">
             <p className="text-neutral-500">Interactive Architecture Diagram Placeholder</p>
          </div>
        </div>
      </main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </>
  );
}
