import { useModalStore } from "@/store/modalStore";
import { Badge } from "@heroui/badge";
import Link from "next/link";

export default function TopProducts() {
  const products = [
    {
      icon: "🎓",
      title: "Educational Tours",
      comingSoon: "false",
      link: "/educationalTours",
      description:
        "Immersive learning experiences that combine education with adventure, perfect for students and educational institutions seeking knowledge beyond the classroom.",
    },
    {
      icon: "🏢",
      title: "Corporate Tours",
      comingSoon: "true",
      link: "/corporateTours",
      description:
        "Team-building expeditions and corporate retreats designed to strengthen bonds, enhance collaboration, and inspire innovation in natural settings.",
    },
    {
      icon: "⛰️",
      title: "Himalayan Expedition",
      comingSoon: "true",
      link: "/himalayanExpedition",
      description:
        "Epic journeys through the world’s highest mountains, offering unparalleled adventure and spiritual connection with nature’s grandeur.",
    },
  ];

  const openModal = useModalStore((s: any) => s.openModal);

  // Check if any product is coming soon
  const hasComingSoon = products.some((item) => item.comingSoon === "true");

  return (
    <section id="products" className="w-full py-26">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold font-outfit">
          Top Products by <span className="text-red-500">Aleph</span>
        </h2>
        <p className="text-gray-400 mt-3 font-outfit max-w-2xl mx-auto text-sm">
          Curated travel experiences designed to inspire, educate, and
          transform.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {products.map((item, index) => (
          <Badge
            key={index}
            isInvisible={item.comingSoon === "false"}
            size="lg"
            color="secondary"
            content="Coming Soon">
            {item.comingSoon === "true" ? (
              <div
                className="
                  group p-10 rounded-2xl border border-gray-200 
                  transition-all duration-300 shadow-sm 
                  cursor-not-allowed opacity-60
                ">
                {/* Icon */}
                <div
                  className="
                    w-16 h-16 rounded-xl bg-red-100 text-red-500 text-3xl 
                    flex items-center justify-center mb-6
                  ">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4 font-outfit">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed font-outfit">
                  {item.description}
                </p>
              </div>
            ) : (
              <Link href={item.link}>
                <div
                  className="
                    group p-10 rounded-2xl border border-gray-200 
                    transition-all duration-300 shadow-sm 
                    hover:border-red-500 cursor-pointer
                  ">
                  <div
                    className="
                      w-16 h-16 rounded-xl bg-red-100 text-red-500 text-3xl 
                      flex items-center justify-center mb-6 transition-all duration-300
                      group-hover:bg-red-500 group-hover:text-white
                    ">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-4 font-outfit">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed font-outfit">
                    {item.description}
                  </p>
                </div>
              </Link>
            )}
          </Badge>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-14">
        <button
          onClick={openModal}
          disabled={hasComingSoon}
          className={`
            bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-xl font-outfit text-lg shadow-md transition-all
            ${hasComingSoon ? "opacity-50 cursor-not-allowed hover:bg-red-500" : ""}
          `}>
          Book Your Journey
        </button>
      </div>
    </section>
  );
}
