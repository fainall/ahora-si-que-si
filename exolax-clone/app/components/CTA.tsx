export default function CTA() {
  return (
    <section id="contact" className="bg-black text-white py-32 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
            HAVE AN IDEA IN<br />YOUR MIND? LET'S<br />MAKE SOMETHING<br />GREAT TOGETHER
          </h2>
          <button className="px-12 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105">
            get in touch
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <p className="text-gray-400 mb-2">Email us</p>
            <a href="mailto:info@example.com" className="text-2xl font-bold hover:text-gray-300 transition-colors">
              info@example.com
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">Call us</p>
            <a href="tel:+19876543210" className="text-2xl font-bold hover:text-gray-300 transition-colors">
              +1 987 654 3210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
