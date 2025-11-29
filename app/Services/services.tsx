export default function Services() {
  const services = [
    {
      icon: "🍃",
      title: "Sustainability & Development",
      items: [
        "Carbon Offset Programs",
        "Community Development Projects",
        "Environmental Conservation Initiatives",
        "Sustainable Tourism Consulting",
      ],
      active: true, // 👈 first card should have red highlight by default
    },
    {
      icon: "✈️",
      title: "Travel Services",
      items: [
        "Customized Itineraries",
        "Group Tours & Expeditions",
        "Solo Travel Packages",
        "Luxury Eco-Resorts",
      ],
      active: false,
    },
    {
      icon: "🎒",
      title: "Corporate & Educational",
      items: [
        "Corporate Team Building",
        "Educational Field Trips",
        "Leadership Development Programs",
        "Wellness Retreats",
      ],
      active: false,
    },
  ];

  return (
    <section id="services" className="w-full py-20">
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold font-outfit">
          Services We <span className="text-red-500">Offer</span>
        </h2>

        <p className="text-gray-600 mt-2 max-w-2xl mx-auto font-outfit text-sm">
          Comprehensive travel solutions focused on sustainability,
          responsibility, and meaningful experiences.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => {
          const isActive = service.active;

          return (
            <div
              key={index}
              className={`
                group p-10 rounded-2xl cursor-pointer
                border transition-all duration-300 shadow-sm

                ${
                  isActive
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 bg-white hover:border-red-300"
                }
              `}>
              {/* Icon */}
              <div
                className={`
                  w-14 h-14 rounded-xl flex items-center justify-center mb-6 
                  text-3xl transition-all duration-300

                  ${
                    isActive
                      ? "bg-red-500 text-white"
                      : "bg-red-100 text-red-500 group-hover:bg-red-100 group-hover:text-white"
                  }
                `}>
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className={`
                  text-lg font-semibold mb-4 font-outfit
                  ${isActive ? "text-red-600" : "text-gray-900 group-hover:text-red-500"}
                `}>
                {service.title}
              </h3>

              {/* List items - NO hover effects */}
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700 font-outfit">
                    <span className="text-red-500 text-sm">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
