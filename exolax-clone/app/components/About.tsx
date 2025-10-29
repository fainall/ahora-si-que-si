export default function About() {
  return (
    <section id="about" className="bg-black text-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-0 max-w-4xl">
              CREATING DIGITAL<br />SOLUTIONS FOR<br />BRAND GROWTH
            </h2>
            <a href="#" className="text-white hover:text-gray-300 transition-colors underline underline-offset-4">
              know more →
            </a>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            At the intersection of vision and execution, we bring creative ideas team transforms concepts into compelling narratives
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Mission */}
          <div className="group">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-300 transition-colors">
                OUR MISSION
              </h3>
              <div className="w-16 h-1 bg-white group-hover:w-24 transition-all duration-300"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to redefine boundaries, captivate audiences, & drive advancement through innovative digital solutions that empower brands to thrive in the modern landscape.
            </p>
          </div>

          {/* Vision */}
          <div className="group">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-300 transition-colors">
                OUR VISION
              </h3>
              <div className="w-16 h-1 bg-white group-hover:w-24 transition-all duration-300"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To be the leading force in digital transformation, inspiring businesses worldwide to embrace creativity and technology for sustainable growth and lasting impact.
            </p>
          </div>

          {/* Awards */}
          <div className="group">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-300 transition-colors">
                OUR AWARDS
              </h3>
              <div className="w-16 h-1 bg-white group-hover:w-24 transition-all duration-300"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Recognized globally for excellence in design and innovation, our awards reflect our commitment to delivering exceptional results that exceed client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
