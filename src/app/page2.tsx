import { Users, Building2, Target, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-blue-700 p-2">
                <svg viewBox="0 0 100 100" className="h-full w-full text-white" fill="currentColor">
                  <rect x="20" y="30" width="60" height="50" fill="currentColor"/>
                  <polygon points="50,10 90,30 10,30" fill="currentColor"/>
                  <rect x="40" y="50" width="20" height="30" fill="white"/>
                </svg>
              </div>
              <div className="text-xs leading-tight">
                <div className="font-bold text-blue-600">HIMPUNAN MAHASISWA</div>
                <div className="text-lg font-bold text-gray-900">SISTEM INFORMASI</div>
                <div className="text-gray-600">UNIVERSITAS TERBUKA BOGOR</div>
              </div>
            </div>
            
            <div className="hidden items-center gap-8 md:flex">
              <a href="#" className="relative text-sm font-medium text-blue-600">
                Home
                <span className="absolute -bottom-6 left-0 right-0 h-1 bg-blue-600"></span>
              </a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                Tentang HIMASI
              </a>
              <div className="group relative">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600">
                  Struktur Organisasi
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                Berita
              </a>
              <div className="group relative">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600">
                  Keanggotaan
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0B1F3F] via-[#1e3a5f] to-[#2563eb]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0B1F3F]/50 to-transparent"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="text-white">
              <div className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                Himpunan Mahasiswa Sistem Informasi
              </div>
              
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
                Bersama HIMASI, Wujudkan Potensi Mahasiswa SI.
              </h1>
              
              <p className="mb-8 text-lg text-blue-50 lg:text-xl">
                Bersama HIMASI, kami saling belajar, tiga pilar tumbuh bersama komunitas yang saling dukung
              </p>
              
              <button className="group flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-[#0B1F3F] transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50">
                Gabung Himasi
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <Users className="mb-2 h-8 w-8 text-cyan-300" />
                  <div className="text-2xl font-bold">180+</div>
                  <div className="text-sm text-blue-100">Anggota Aktif</div>
                </div>
                
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <Building2 className="mb-2 h-8 w-8 text-cyan-300" />
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-blue-100">Departemen</div>
                </div>
                
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <Target className="mb-2 h-8 w-8 text-cyan-300" />
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-blue-100">Program Kerja</div>
                </div>
                
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <Award className="mb-2 h-8 w-8 text-cyan-300" />
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-blue-100">Akademis Eksternal</div>
                </div>
              </div>
            </div>

            {/* Right Content - Photo Frames */}
            <div className="relative hidden lg:block">
              {/* Decorative squiggly line */}
              <svg className="absolute -left-12 top-1/2 z-10 h-32 w-32 -translate-y-1/2 text-yellow-400" viewBox="0 0 100 100" fill="none">
                <path d="M10 50 Q 30 20, 50 50 T 90 50" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
              
              {/* Decorative circles */}
              <div className="absolute -right-8 top-20 z-0 h-32 w-32 rounded-full bg-orange-400/60 blur-2xl"></div>

              {/* Frame 1 - Top Right */}
              <div className="absolute right-0 top-0 z-20 h-64 w-80 rotate-6 overflow-hidden rounded-2xl border-8 border-white bg-gray-200 shadow-2xl shadow-black/30">
                <div className="flex h-full items-center justify-center bg-linear-to-br from-orange-400 to-pink-400">
                  <div className="text-center">
                    <div className="mb-2 text-6xl">📸</div>
                    <div className="text-sm font-medium text-white">Foto Event HIMASI</div>
                  </div>
                </div>
              </div>
              
              {/* Frame 2 - Bottom Left */}
              <div className="relative left-0 top-24 z-10 h-64 w-80 -rotate-3 overflow-hidden rounded-2xl border-8 border-white bg-gray-200 shadow-2xl shadow-black/30">
                <div className="flex h-full items-center justify-center bg-linear-to-br from-cyan-400 to-blue-500">
                  <div className="text-center">
                    <div className="mb-2 text-6xl">👥</div>
                    <div className="text-sm font-medium text-white">Kegiatan Bersama</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
              Apa itu HIMASI?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              HIMASI adalah Himpunan Mahasiswa Sistem Informasi di Universitas Terbuka yang bertujuan sebagai wadah berkumpul dan belajar bersama yang berfokus terhadap aspek sosial pengembangan akademik, keilmuan dan skill mahasiswa SI.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
