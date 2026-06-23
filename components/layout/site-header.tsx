"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Globe2, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/lib/dictionaries";
import {
  localizePath,
  localeLabels,
  localeNames,
  locales,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function SiteHeader({ dictionary, locale }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? `/${locale}`;
  
  const navItems = [
    { label: dictionary.nav.aiAutomation, href: `/${locale}/solutions/ai-automation` },
    { label: dictionary.nav.engineering, href: `/${locale}/solutions/engineering` },
    { label: dictionary.nav.growth, href: `/${locale}/solutions/growth-media` },
    { label: dictionary.nav.cases, href: `/${locale}/cases` },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-500",
        isScrolled
          ? "border-white/10 bg-black/60 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href={`/${locale}`}
          className="group inline-flex items-center gap-3"
          aria-label="HyperAg"
        >
          <span className="relative grid size-10 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/brand/hyperag-mark.png"
              alt=""
              width={500}
              height={500}
              className="size-7 object-contain grayscale opacity-90 group-hover:grayscale-0 transition-all"
              priority
            />
          </span>
          <span className="text-lg font-semibold text-white tracking-tight">HyperAg</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-400 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher
            currentLocale={locale}
            pathname={pathname}
            label={dictionary.nav.language}
          />
          <Button asChild size="sm" className="bg-white text-black hover:bg-neutral-200 rounded-full font-medium h-9 px-4">
            <Link href={`/${locale}/book`}>
              {dictionary.nav.book}
              <ArrowRight aria-hidden className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={isOpen ? dictionary.nav.close : dictionary.nav.menu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="container-page pb-5 lg:hidden"
          >
            <div className="glass-surface rounded-[1.75rem] p-3 border-white/10 bg-black/80 backdrop-blur-xl">
              <nav className="grid gap-1" aria-label="Mobile">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-3 sm:flex-row sm:items-center sm:justify-between">
                <LanguageSwitcher
                  currentLocale={locale}
                  pathname={pathname}
                  label={dictionary.nav.language}
                />
                <Button asChild className="bg-white text-black hover:bg-neutral-200 w-full justify-between">
                  <Link href={`/${locale}/book`}>
                    {dictionary.nav.book}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

type LanguageSwitcherProps = {
  currentLocale: Locale;
  pathname: string;
  label: string;
};

function LanguageSwitcher({ currentLocale, pathname, label }: LanguageSwitcherProps) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-transparent p-1"
      aria-label={label}
    >
      <span className="grid size-6 place-items-center rounded-full text-neutral-400">
        <Globe2 className="size-3.5" aria-hidden />
      </span>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={localizePath(pathname, locale)}
          aria-current={locale === currentLocale ? "page" : undefined}
          aria-label={localeNames[locale]}
          className={cn(
            "rounded-full px-2 py-1 text-[11px] font-semibold transition",
            locale === currentLocale
              ? "bg-white text-black"
              : "text-neutral-400 hover:bg-white/10 hover:text-white",
          )}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
}
