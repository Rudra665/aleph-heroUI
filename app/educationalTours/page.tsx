"use client";

import Image from "next/image";
import { useModalStore } from "@/store/modalStore";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function EducationalTours() {
  const openModal = useModalStore((s: any) => s.openModal);

  const features = [
    {
      icon: "🎯",
      title: "Goal-Oriented Learning",
      description:
        "We begin by understanding academic goals to design meaningful journeys.",
    },
    {
      icon: "🌍",
      title: "Curated Destinations",
      description:
        "Destinations selected for historical, cultural, and scientific value.",
    },
    {
      icon: "🗺️",
      title: "Experiential Itineraries",
      description:
        "Hands-on learning through museums, workshops, and exploration.",
    },
    {
      icon: "🧳",
      title: "Hassle-Free Logistics",
      description: "We manage transport, accommodation, meals, and safety.",
    },
    {
      icon: "🧑‍🏫",
      title: "Expert Guidance",
      description: "Educators and subject experts enhance learning depth.",
    },
    {
      icon: "🎒",
      title: "Personalized Experiences",
      description: "Tours tailored to group needs and learning pace.",
    },
    {
      icon: "📚",
      title: "Learning Resources",
      description: "Study materials before, during, and after the tour.",
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Trained staff, protocols, and emergency preparedness.",
    },
  ];
  const services = [
    "Industrial Visit Programs",
    "Travel Booking Assistance",
    "Hotel Booking",
    "Flight Ticket Booking",
    "Transport Arrangement",
    "Adventure & Leisure Activities",
    "B2B Supply (Travel Services)",
    "Experimental Tours & Programs",
    "MICE",
    "Medical Tourism",
    "Corporate Travel Arrangements",
    "Sustainable Development Projects",
    "Local Stakeholders Development Programs",
    "Community Development Initiatives",
    "Tourism Infrastructure Projects",
    "Hotel Acquisitions & Merging",
    "Hospitality Consultants",
    "Destination Marketing",
  ];

  const indiaDestinations = [
    { name: "Manali", image: "/indianDestination/manali.png" },
    { name: "Goa", image: "/indianDestination/goa.jpg" },
    { name: "Meghalaya", image: "/indianDestination/meghalaya.jpg" },
    { name: "Kerala", image: "/indianDestination/kerala.jpeg" },
    { name: "Spiti", image: "/indianDestination/spiti.jpg" },
    { name: "Ladakh", image: "/indianDestination/ladakh.jpg" },
    { name: "Srinagar", image: "/indianDestination/srinagar.jpg" },
    { name: "Rishikesh", image: "/indianDestination/rishikesh.jpg" },
    { name: "Jim Corbett", image: "/indianDestination/jim-corbett.jpg" },
    {
      name: "Nainital & Pangot",
      image: "/indianDestination/nainital-pangot.jpg",
    },
  ];

  const internationalDestinations = [
    { name: "Bali", image: "/internationalDestination/bali.jpg" },
    { name: "Singapore", image: "/internationalDestination/singapore.jpg" },
    { name: "Dubai", image: "/internationalDestination/dubai.jpg" },
    { name: "Malaysia", image: "/internationalDestination/malaysia.jpg" },
    { name: "Thailand", image: "/internationalDestination/thailand.jpg" },
    { name: "Vietnam", image: "/internationalDestination/vietnam.jpg" },
  ];
  const faqs = [
    {
      question: "What are adventure activities?",
      answer:
        "Adventure activities are fun outdoor experiences like hiking, climbing, trekking, or rafting. They are all about excitement, exploration, and connecting with nature.",
    },
    {
      question: "Are adventure activities safe?",
      answer:
        "Yes, adventure activities can be safe when proper guidelines are followed. Using the right equipment and listening to trained guides helps ensure safety.",
    },
    {
      question: "What should I bring for an adventure activity?",
      answer:
        "Bring comfortable clothes, water, snacks, sunscreen, and a small first aid kit. Most importantly, bring your enthusiasm and a positive attitude!",
    },
    {
      question: "Can anyone join in, or do I need to be super fit?",
      answer:
        "Anyone can join! Adventure activities are available for all fitness levels. You can choose activities that match your comfort and ability.",
    },
    {
      question: "Can kids do adventure activities?",
      answer:
        "Yes! There are adventure activities designed especially for kids. Just make sure safety guidelines are followed and adult supervision is provided.",
    },
    {
      question: "How do I find good adventure guides and companies?",
      answer:
        "You can ask friends for recommendations or check online reviews. Look for experienced guides who prioritize safety and professionalism.",
    },
    {
      question: "What if something goes wrong during the adventure?",
      answer:
        "Stay calm and follow your guide’s instructions. Trained guides know how to handle emergencies and will make sure you are safe.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const benefits = [
    {
      title: "Confidence Building",
      description:
        "Adventure activities like trekking and rock climbing develop self-belief, courage, and resilience.",
      icon: "⛰️",
    },
    {
      title: "Teamwork & Leadership",
      description:
        "Group-based tasks encourage collaboration, leadership skills, and shared responsibility.",
      icon: "🤝",
    },
    {
      title: "Problem-Solving Skills",
      description:
        "Overcoming outdoor challenges sharpens critical thinking, adaptability, and decision-making.",
      icon: "🧠",
    },
    {
      title: "Academic Relevance",
      description:
        "Visits to historical sites, cultural exchanges, and nature explorations deepen academic understanding.",
      icon: "📚",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-2.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore the World,
            <br />
            Explore your Mind
          </h1>

          <button
            onClick={openModal}
            className="px-6 py-3 bg-red-500 rounded-lg hover:bg-red-600 transition">
            Book Your Adventure
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto px-6 py-20">
        {/* LEFT SIDE — About Aleph */}
        <div>
          <p className="text-xs tracking-widest text-gray-500 font-semibold">
            ABOUT ALEPH
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            We're Aleph Campeur
          </h2>
          <p className=" mt-4 leading-relaxed">
            We're Aleph Campeur, an adventure based travel organization that
            promotes responsible travel. We want to show you the world in a new
            light; one that inspires you to care for it with compassion.
          </p>
        </div>
        {/* RIGHT SIDE — Educational Tours */}
        <div>
          <p className="text-xs tracking-widest text-red-600 font-semibold">
            EDUCATIONAL TOURS
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            {" "}
            An Educational Tours{" "}
          </h2>
          <p className="mt-4 leading-relaxed">
            {" "}
            An educational tour combines the enriching experiences of exploring
            new places with the structured learning of traditional education.
            These tours are designed to provide students with hands-on learning
            opportunities that complement their classroom studies, often
            covering subjects such as history, culture, science, and
            language.{" "}
          </p>
        </div>
      </div>

      {/* WHY CHOOSE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-center text-3xl md:text-5xl font-semibold">
          Why Choose Educational Tours?
        </h2>

        <p className="mt-4 text-center max-w-3xl mx-auto">
          Educational tours extend learning beyond classrooms by offering
          real-world, hands-on experiences that deepen understanding and
          curiosity.
        </p>

        {/* FEATURES GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto my-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* LEFT CONTENT */}
        <div className="md:col-span-1">
          <p className="text-xs tracking-widest text-red-600 font-semibold mb-3">
            SERVICES
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Services Offered <br /> by Aleph
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Aleph Campeur delivers end-to-end travel, educational, adventure,
            and development solutions tailored for institutions, corporates, and
            communities.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className=" md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="
                border border-gray-300 rounded-xl 
                px-5 py-4 
                flex items-center gap-3
                hover:border-red-500
                transition
              ">
              {/* Icon */}
              <span className="text-red-500 text-lg">◆</span>

              {/* Text */}
              <p className=" font-medium">{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mb-20">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-widest text-red-600 font-semibold mb-3">
            OUTDOOR LEARNING
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How Does Outdoor Learning <br /> Create Wonders?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Outdoor learning blends adventure with education, helping learners
            grow mentally, socially, and academically through real-world
            experiences.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                border border-gray-300 rounded-xl
                p-6 bg-transparent
                hover:border-red-500 transition
              ">
              {/* Icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full border border-gray-300 text-2xl">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-widest text-red-600 font-semibold mb-3">
            DESTINATIONS
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Explore Our Educational Destinations
          </h2>

          <p className="text-gray-600 leading-relaxed">
            From breathtaking Indian landscapes to enriching international
            locations, Aleph offers destinations that blend education, culture,
            and adventure.
          </p>
        </div>

        {/* INDIA DESTINATIONS */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">India</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {indiaDestinations.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="
          relative overflow-hidden rounded-xl 
          border border-gray-300
          group cursor-pointer
        ">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <p className="text-white text-lg font-semibold p-4">
                    {place.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">International</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {internationalDestinations.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="
          relative overflow-hidden rounded-xl 
          border border-gray-300
          group cursor-pointer
        ">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <p className="text-white text-lg font-semibold p-4">
                    {place.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs tracking-widest text-red-600 font-semibold mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600">
            Everything you need to know before starting your adventure journey.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                border border-gray-300 rounded-xl
                overflow-hidden
              ">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full flex justify-between items-center
                  px-6 py-5 text-left
                  font-medium
                  hover:text-red-600 transition
                ">
                <span>{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
