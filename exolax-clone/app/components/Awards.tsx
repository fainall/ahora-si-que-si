export default function Awards() {
  const awards = [
    { name: 'Redis Best Award', year: '2020', location: 'NY. America' },
    { name: 'UX Design Award', year: '2022', location: 'NY. America' },
    { name: 'Design For Asian', year: '2023', location: 'NY. America' },
    { name: 'Creative Designer', year: '2024', location: 'NY. America' }
  ];

  return (
    <section className="bg-black text-white py-32 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-20">
          AWARDS
        </h2>

        {/* Awards List */}
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group border-t border-zinc-800 pt-8 hover:border-white transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Award Name */}
                <div className="md:col-span-6">
                  <h3 className="text-3xl md:text-4xl font-bold group-hover:translate-x-4 transition-transform duration-300">
                    {award.name}
                  </h3>
                </div>

                {/* Year */}
                <div className="md:col-span-2">
                  <p className="text-2xl text-gray-400 group-hover:text-white transition-colors duration-300">
                    {award.year}
                  </p>
                </div>

                {/* Location */}
                <div className="md:col-span-4">
                  <p className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300">
                    {award.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
