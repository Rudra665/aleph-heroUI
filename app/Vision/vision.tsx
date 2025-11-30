import Link from "next/link";

export default function Vision() {
  return (
    <section className="w-full py-16">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
        Vision <span className="text-red-500">&amp; Mission</span>
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Vision Card */}
        <Link
          href="#"
          className="group p-8 border border-gray-200 rounded-2xl shadow-sm cursor-pointer 
                     transition-all duration-300 hover:border-red-500">
          <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
            <span
              className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center  
                         text-red-500 text-2xl transition-all duration-300 
                         group-hover:bg-red-500 group-hover:text-white">
              👁️
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition">
            Our Vision
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm">
            To be the leading provider of transformative travel experiences that
            inspire personal growth, foster cultural understanding, and create
            lasting positive impact on communities and the environment.
          </p>
        </Link>

        {/* Mission Card */}
        <Link
          href="#"
          className="group p-8 border border-gray-200 rounded-2xl shadow-sm  cursor-pointer 
                     transition-all duration-300 hover:border-red-500">
          <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
            <span
              className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center  
                         text-red-500 text-2xl transition-all duration-300 
                         group-hover:bg-red-500 group-hover:text-white">
              🎯
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition">
            Our Mission
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm">
            To deliver exceptional, responsible travel experiences through
            sustainable practices, authentic cultural connections, and
            unwavering commitment to excellence in every journey we create.
          </p>
        </Link>
      </div>
    </section>
  );
}
