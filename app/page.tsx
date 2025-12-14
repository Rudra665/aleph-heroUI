"use client";
import Vision from "@/app/Vision/vision";
import WhyChooseUs from "@/app/WhyChooseUs/whyChooseUs";
import Services from "@/app/Services/services";
import TopProducts from "@/app/Products/products";
import { useModalStore } from "@/store/modalStore";
import { use, useEffect, useState } from "react";
import { useThemeStore } from "@/store/themeStore";

export default function Home() {
  const openModal = useModalStore((s: any) => s.openModal);
  const mode = useThemeStore((s) => s.mode);

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}>
          {mode != "aleph-dark" ? (
            <div className="absolute z-1 w-full h-50 bottom-0 bg-gradient-to-b from-transparent via-[#c7c7c7] to-white dark:via-[#222831] dark:to-[#222831]">
              {""}
            </div>
          ) : (
            <div className="absolute z-1 w-full h-50 bottom-0 bg-gradient-to-b from-transparent via-[#222831] to-[#222831]">
              {""}
            </div>
          )}
        </div>
        {/* Blur fade */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-6xl mx-auto px-6  text-white">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-white uppercase rounded-full bg-red-500/20 mb-4 border-1 border-red-500">
            One Planet Travel Network
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Travel with Purpose. <br />
            <span className="text-red-500"> Adventure with Conscience.</span>
          </h1>

          <p className="text-gray-200 max-w-xl mb-8">
            Aleph: Meaningful, Responsible, and Sustainable Journeys.
          </p>

          <div className="flex gap-4">
            <button
              onClick={openModal}
              className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
              Book Your Adventure
            </button>
            <button className="px-6 py-3 text-white border border-white rounded-lg hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Vision />
      <WhyChooseUs />
      <Services />
      <TopProducts />
    </>
  );
}
