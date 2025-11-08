"use client";

import CardTotal from "@/components/card/card-total";
import {
  Users,
  Building2,
  Briefcase,
  Handshake,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#003d7a] via-[#0052a3] to-[#00a8cc] pt-24">
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
            {/* Stats Section */}
            <section className="container mx-auto px-8 pb-20 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Stat 1 */}
                {/* <div className="text-center">
                  <div className="text-5xl mb-3 flex justify-center">
                    <Users
                      size={48}
                      className="text-orange-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-white font-black text-2xl">150+</div>
                  <div className="text-white text-sm font-semibold">
                    Anggota Aktif
                  </div>
                </div> */}
                <CardTotal title="Anggota Aktif" value="150" icon={<Users size={48} className="text-orange-400" strokeWidth={1.5} />} isPlus={true} />
                <CardTotal title="Departemen" value="5" icon={<Building2 size={48} className="text-blue-500" strokeWidth={1.5} />} isPlus={true} />
                <CardTotal title="Program Kerja" value="10" icon={<Briefcase size={48} className="text-yellow-400" strokeWidth={1.5} />} isPlus={true} />
                <CardTotal title="Kolaborasi Eksternal" value="10" icon={<Handshake size={48} className="text-green-400" strokeWidth={1.5} />} isPlus={true} />
              </div>
            </section>
          </div>

          {/* Right Side - Images */}
          <div className="relative h-96 hidden lg:block">
            <img
              src="/assets/hello.png"
              alt="Group Photo"
              className="w-full h-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
