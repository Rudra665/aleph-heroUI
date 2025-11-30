import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Outfit } from "next/font/google";
import { Providers } from "../components/providers";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { Phone, Mail, Globe, MapPin } from "lucide-react"; // outline-style icons[web:37]
import BookAdventureModal from "@/components/formModal";
import { ToastProvider } from "@heroui/toast";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider } from "next-themes";

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
      <head />
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        value={{
          light: "light",
          "aleph-dark": "aleph-dark",
        }}>
        <body
          suppressHydrationWarning
          className={clsx(
            "min-h-screen text-foreground bg-background font-sans antialiased",
            outfit.className
          )}>
          <Analytics />
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-screen flex-grow">
                <>
                  <ToastProvider placement="bottom-left" />
                  <HeroUIProvider>{children}</HeroUIProvider>
                </>
                <section id="contact" className="flex justify-center py-16">
                  <BookAdventureModal />
                </section>
              </main>
              <footer className="bg-black text-white py-10">
                <section id="contact">
                  <div className="mx-auto flex w-11/12 max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
                    {/* Logo + tagline */}
                    <div className="max-w-sm">
                      <div className="mb-4">
                        <Image
                          src="/logo-white.png"
                          alt="Aleph logo"
                          width={140}
                          height={40}
                        />
                      </div>
                      <p className="text-sm leading-relaxed text-gray-300">
                        One Planet Travel Network – Travel with purpose,
                        adventure with conscience.
                      </p>
                    </div>

                    {/* Contact Us */}
                    <div>
                      <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
                          <Phone className="h-4 w-4" color="red" />
                          (+91) 9882222700
                          <br /> (+91) 9696290004
                        </li>

                        <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
                          <Mail className="h-4 w-4" color="red" />
                          info@aleph.co.in
                        </li>
                        <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
                          <Globe className="h-4 w-4" color="red" />
                          www.aleph.co.in
                        </li>
                      </ul>
                    </div>

                    {/* Our Offices */}
                    <div className="text-sm">
                      <h3 className="mb-4 text-lg font-semibold">
                        Our Offices
                      </h3>
                      <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-1 h-4 w-4 text-red-500" />
                          <div>
                            <p className="font-medium">Head Office</p>
                            <p className="text-gray-300">
                              0, Behind Malaria Office, MLPH-1,
                              <br />
                              Jhansi, UP India 284001
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <MapPin className="mt-1 h-4 w-4 text-red-500" />
                          <div>
                            <p className="font-medium">Corporate Office</p>
                            <p className="text-gray-300">
                              DR. Bharti Complex Sec-15, Pillar No.28
                              <br />
                              Opp Nerula Hotel, Near Union Bank
                              <br />
                              Noida-201301
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-400">
                    © 2025 Aleph. All rights reserved.
                  </div>
                </section>
              </footer>
            </div>
          </Providers>
        </body>
      </ThemeProvider>
    </html>
  );
}
