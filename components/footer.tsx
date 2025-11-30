"use client";
import Image from "next/image";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { LogoFooter } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-10 inset-shadow-2xs border-t border-default-200">
      <section id="contact">
        <div className="mx-auto flex w-11/12 max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
          {/* Logo + tagline */}
          <div className="max-w-sm">
            <div className="mb-4">
              <LogoFooter />
            </div>
            <p className="text-sm leading-relaxed ">
              One Planet Travel Network – Travel with purpose, adventure with
              conscience.
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
                <a href="mailto:info@aleph.co.in">info@aleph.co.in</a>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
                <Globe className="h-4 w-4" color="red" />
                <a
                  href="https://www.aleph.co.in"
                  target="_blank"
                  rel="noreferrer">
                  www.aleph.co.in
                </a>
              </li>
            </ul>
          </div>

          {/* Our Offices */}
          <div className="text-sm">
            <h3 className="mb-4 text-lg font-semibold">Our Offices</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 text-red-500" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="">
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
                  <p className="">
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
        <div className="mt-8 inset-shadow-sm pt-8 text-center text-xs text-gray-400">
          © 2025 Aleph. All rights reserved.
        </div>
      </section>
    </footer>
  );
}
