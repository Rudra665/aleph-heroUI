import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import BookAdventureModal from "@/components/formModal";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/* no <head /> tag here; Next.js injects it */}
      <body
        suppressHydrationWarning
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          outfit.className
        )}>
        {/* Theme + UI providers must be inside body */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          value={{
            light: "light",
            "aleph-dark": "aleph-dark",
          }}>
          <HeroUIProvider>
            <ToastProvider placement="bottom-left" />
            <Analytics />

            <div className="relative flex flex-col min-h-screen">
              <Navbar />

              <main className="container mx-auto max-w-screen flex-grow">
                {children}

                <section id="contact" className="flex justify-center py-16">
                  <BookAdventureModal />
                </section>
              </main>
              <Footer />
            </div>
          </HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
