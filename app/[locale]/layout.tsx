import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyperpag.com";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

type MetadataProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = dictionaries[locale];
  const languageAlternates = locales.reduce(
    (accumulator, currentLocale) => {
      accumulator[currentLocale] = `${siteUrl}/${currentLocale}`;
      return accumulator;
    },
    {} as Record<Locale, string>,
  );

  return {
    metadataBase: new URL(siteUrl),
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    keywords: [...dictionary.meta.keywords],
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale,
      url: `${siteUrl}/${locale}`,
      siteName: "HyperAg",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="dark">
      <body>{children}</body>
    </html>
  );
}
