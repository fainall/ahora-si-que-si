export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Designer Credit */}
          <div className="text-gray-400 text-sm">
            Designer by{' '}
            <a
              href="https://gramentheme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors underline underline-offset-2"
            >
              GRAMENTHEME.COM
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 exolax design all rights reserved
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Dribbble
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
