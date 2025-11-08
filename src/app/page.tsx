"use client";

import {
  ChevronDown,
  Users,
  Building2,
  Briefcase,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#003d7a] via-[#0052a3] to-[#00a8cc]">
      {/* Header Navigation */}
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

          {/* Login Button */}
          <Button
            variant="outline"
            className="text-[#00a8cc] border-2 border-[#00a8cc] font-bold px-6 hover:bg-[#00a8cc] hover:text-white bg-transparent"
          >
            Login
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-8 py-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Fakultas Sains & Teknologi UT Bogor
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Bersama HIMASI, Wujudkan
              <br />
              <span className="text-[#ffff00]">Potensi Mahasiswa Sl.</span>
            </h1>

            {/* Description */}
            <p className="text-white text-lg leading-relaxed max-w-md">
              Bareng HIMASI, kamu gak cuma belajar, tapi juga tumbuh bareng
              komunitas yang saling dukung.
            </p>

            {/* CTA Button */}
            <button className="bg-[#00a8cc] hover:bg-[#0088a8] text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
              Gabung Himasi
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Side - Images */}
          <div className="relative h-96 hidden lg:block">
            {/* Top Image Card */}
            <div className="absolute top-0 right-0 w-72 h-56 bg-white rounded-3xl shadow-xl p-3 transform rotate-6 hover:rotate-0 transition-transform">
              <img
                src="/students-group-photo-university.jpg"
                alt="Students"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Orange Circle Decoration */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 border-8 border-orange-400 rounded-full"></div>
            </div>

            {/* Bottom Image Card */}
            <div className="absolute bottom-0 left-0 w-72 h-56 bg-white rounded-3xl shadow-xl p-3 transform -rotate-3 hover:rotate-0 transition-transform">
              <img
                src="/group-photo-students-outdoor.jpg"
                alt="Group Photo"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Green Squiggle Decoration */}
            <div className="absolute bottom-20 left-40 text-[#00ff00] font-black text-6xl opacity-60">
              ⚡
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="container mx-auto px-8 pb-20 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-5xl mb-3 flex justify-center">
              <Users size={48} className="text-orange-400" strokeWidth={1.5} />
            </div>
            <div className="text-white font-black text-2xl">150+</div>
            <div className="text-white text-sm font-semibold">
              Anggota Aktif
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-5xl mb-3 flex justify-center">
              <Building2
                size={48}
                className="text-cyan-400"
                strokeWidth={1.5}
              />
            </div>
            <div className="text-white font-black text-2xl">5</div>
            <div className="text-white text-sm font-semibold">Departemen</div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-5xl mb-3 flex justify-center">
              <Briefcase
                size={48}
                className="text-yellow-300"
                strokeWidth={1.5}
              />
            </div>
            <div className="text-white font-black text-2xl">10+</div>
            <div className="text-white text-sm font-semibold">
              Program Kerja
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <div className="text-5xl mb-3 flex justify-center">
              <Handshake
                size={48}
                className="text-cyan-300"
                strokeWidth={1.5}
              />
            </div>
            <div className="text-white font-black text-2xl">10+</div>
            <div className="text-white text-sm font-semibold">
              Kolaborasi Eksternal
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
