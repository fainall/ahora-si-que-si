export default function Portfolio() {
  const projects = [
    {
      title: 'VIBRANT VISION AGENCY',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      title: 'AD STRATEGY REVOLUTION',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
    },
    {
      title: 'PRIME FLOW NETWORK',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="portfolio" className="bg-black text-white py-32 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            DESIGN FOR<br />TOMORROW'S SUCCESS<br />CASE STUDY
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Our mission is to redefine boundaries, captivate audiences, & drive advancement through
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3] bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
