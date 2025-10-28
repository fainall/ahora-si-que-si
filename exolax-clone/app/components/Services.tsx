export default function Services() {
  const services = [
    {
      number: '001',
      title: 'WEB DESIGN',
      description: 'We craft stunning, user-centric websites that blend aesthetics with functionality. Our designs are responsive, intuitive, and optimized for conversions, ensuring your brand stands out in the digital landscape.'
    },
    {
      number: '002',
      title: 'BRANDING',
      description: 'Build a powerful brand identity that resonates with your audience. From logo design to complete brand guidelines, we create cohesive visual systems that tell your unique story and establish market presence.'
    },
    {
      number: '003',
      title: 'MARKETING',
      description: 'Drive growth with data-driven marketing strategies. We combine creative campaigns with analytics to maximize your ROI, increase engagement, and convert prospects into loyal customers across all digital channels.'
    }
  ];

  return (
    <section id="services" className="bg-black text-white py-32 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 md:mb-0">
            WHAT WE'RE<br />GOOD AT
          </h2>
          <a href="#" className="text-white hover:text-gray-300 transition-colors underline underline-offset-4">
            view all services →
          </a>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-t border-zinc-800 pt-12 hover:border-white transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="text-6xl font-bold text-zinc-800 group-hover:text-white transition-colors duration-300">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-4xl font-bold group-hover:translate-x-4 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  <button className="mt-6 text-white hover:text-gray-300 transition-colors underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
