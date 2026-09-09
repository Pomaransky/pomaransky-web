import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Footer, Header, ThemeProvider } from "@/components";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pomaransky.vercel.app"),
  title: "Pomaransky",
  description: "Arkadiusz Pomarański - Frontend Developer",
  keywords: ["Arkadiusz Pomarański", "Frontend Developer", "Software Engineer", "Software Developer"],
  authors: [{ name: "Arkadiusz Pomarański", url: "https://pomaransky.vercel.app" }],
  creator: "Arkadiusz Pomarański",
  publisher: "Arkadiusz Pomarański",
  openGraph: {
    title: "Pomaransky",
    description: "Arkadiusz Pomarański - Frontend Developer",
    type: "website",
    url: "https://pomaransky.vercel.app",
    siteName: "Pomaransky",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
