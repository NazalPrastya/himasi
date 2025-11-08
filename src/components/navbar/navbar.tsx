import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full flex justify-center z-50">
      <header className="container mx-auto px-8 py-4 max-w-7xl">
        <div className="bg-white rounded-3xl px-8 py-4 flex items-center justify-between shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-xl">📚</div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-orange-500">
                HUBUNGAN MASYARAKAT
              </span>
              <span className="text-sm font-black text-[#003d7a]">
                SISTEM INFORMASI
              </span>
              <span className="text-xs text-gray-600">
                Universitas Terbuka Bogor
              </span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-[#003d7a] font-semibold hover:text-[#0052a3]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#003d7a] font-semibold hover:text-[#0052a3]"
            >
              Tentang HIMASI
            </a>
            <div className="flex items-center gap-1 cursor-pointer">
              <a
                href="#"
                className="text-[#003d7a] font-semibold hover:text-[#0052a3]"
              >
                Struktur Organisasi
              </a>
              <ChevronDown size={18} className="text-[#003d7a]" />
            </div>
            <a
              href="#"
              className="text-[#003d7a] font-semibold hover:text-[#0052a3]"
            >
              Berita
            </a>
            <div className="flex items-center gap-1 cursor-pointer">
              <a
                href="#"
                className="text-[#003d7a] font-semibold hover:text-[#0052a3]"
              >
                Keanggotan
              </a>
              <ChevronDown size={18} className="text-[#003d7a]" />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
