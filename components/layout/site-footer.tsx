import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type SiteFooterProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function SiteFooter({ dictionary, locale }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <Link href={`/${locale}`} className="inline-flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src="/brand/hyperag-mark.png"
                  alt=""
                  width={500}
                  height={500}
                  className="size-7 object-contain grayscale"
                />
              </span>
              <span className="text-lg font-medium text-white tracking-tight">HyperAg</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500">
              {dictionary.footer.tagline}
            </p>
          </div>

          <div className="grid gap-8 grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium text-white">Soluções</h3>
              <ul className="mt-4 space-y-3">
                <li><Link href={`/${locale}/solutions/ai-automation`} className="text-sm text-neutral-400 hover:text-white transition">IA & Automação</Link></li>
                <li><Link href={`/${locale}/solutions/engineering`} className="text-sm text-neutral-400 hover:text-white transition">Engenharia</Link></li>
                <li><Link href={`/${locale}/solutions/growth-media`} className="text-sm text-neutral-400 hover:text-white transition">Growth</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">Empresa</h3>
              <ul className="mt-4 space-y-3">
                <li><Link href={`/${locale}/cases`} className="text-sm text-neutral-400 hover:text-white transition">Cases</Link></li>
                <li><Link href={`/${locale}/book`} className="text-sm text-neutral-400 hover:text-white transition">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li><Link href={`/${locale}`} className="text-sm text-neutral-400 hover:text-white transition">Privacidade</Link></li>
                <li><Link href={`/${locale}`} className="text-sm text-neutral-400 hover:text-white transition">Termos</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} HyperAg. {dictionary.footer.rights}
          </p>
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
