export default function Blog() {
  const posts = [
    {
      category: 'Business',
      date: 'January 13, 2025',
      title: 'FOCUS LOGISTICS SECURE NEW LANDMARK CONTRACTS',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    },
    {
      category: 'Awards',
      date: 'January 13, 2025',
      title: 'IMPORTERS ACHIEVE SAVINGS THROUGH THE FIRST SALE RULE!',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      category: 'Analysis',
      date: 'January 13, 2025',
      title: 'GRAPHIC DESIGN AGENCY YOUR GRAPHIC DESIGN AGENCY BRAND NEEDS',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="blog" className="bg-black text-white py-32 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 md:mb-0">
            DIGITAL NEWS<br />& BLOG
          </h2>
          <a href="#" className="text-white hover:text-gray-300 transition-colors underline underline-offset-4">
            view all blogs →
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-zinc-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-zinc-900 rounded-full">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
