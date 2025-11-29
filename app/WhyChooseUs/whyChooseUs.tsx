import Link from "next/link";

export default function WhyChooseUs() {
  const items = [
    {
      icon: "🛡️",
      title: "Heroic Tourism",
      desc: "Travel as a force for positive change – protecting the environment, advocating for local rights, and inspiring communities.",
      link: "#",
    },
    {
      icon: "❤️",
      title: "Authentic Experiences",
      desc: "Access to authentic, responsible travel with impeccable service and unparalleled knowledge of destinations.",
      link: "#",
    },
    {
      icon: "🌱",
      title: "Carbon Conscious",
      desc: "Actively keeping a check on rapid carbon emissions with sustainable practices and eco-friendly accommodations.",
      link: "#",
    },
    {
      icon: "👥",
      title: "Community Impact",
      desc: "Inspire new narratives about communities, art & culture, and explore less-known destinations for meaningful connections.",
      link: "#",
    },
  ];

  return (
    <section className="w-full py-20">
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Why Choose <span className="text-red-500">Aleph</span>
        </h2>

        <p className="text-gray-600 text-sm mt-2 max-w-2xl mx-auto">
          Travel with purpose, adventure with conscience – creating lasting
          positive impact.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl text-sm mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group p-8 border border-gray-300 rounded-2xl bg-white shadow-sm cursor-pointer 
                       transition-all duration-300 hover:border-red-500 hover:shadow-md">
            {/* Icon Box */}
            <div
              className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4 
                         text-red-500 text-2xl transition-all duration-300 
                         group-hover:bg-red-500 group-hover:text-white">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 group-hover:text-red-500 transition">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
