import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function BookPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = dictionaries[locale];
  const book = dictionary.book;

  return (
    <>
      <SiteHeader dictionary={dictionary} locale={locale} />
      <main className="bg-black min-h-screen pt-32 pb-24">
        <div className="container-page mx-auto px-4 grid lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
              {book.title}
            </h1>
            <p className="text-xl text-neutral-400 max-w-md leading-relaxed mb-12">
              {book.description}
            </p>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-md">
              <p className="text-sm text-neutral-300 mb-4">{book.whatsapp}</p>
              <Button asChild variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10">
                <a href={dictionary.cta.whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp Contact
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-neutral-900/40 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">{book.form.name}</label>
                <input type="text" className="w-full h-12 bg-black border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-white/30 transition" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">{book.form.email}</label>
                <input type="email" className="w-full h-12 bg-black border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-white/30 transition" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">{book.form.company}</label>
                <input type="text" className="w-full h-12 bg-black border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-white/30 transition" />
              </div>
              
              <Button type="button" className="w-full h-12 bg-white text-black hover:bg-neutral-200 font-medium text-base rounded-lg mt-4">
                {book.form.submit}
              </Button>
            </form>
          </div>

        </div>
      </main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </>
  );
}
