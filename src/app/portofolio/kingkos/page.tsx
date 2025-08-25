// src/app/portofolio/kingkos/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLaravel, FaTshirt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";

export default function KingkosPage() {
  return (
    <main className="bg-gray-950 min-h-screen text-white pb-20">
      {/* Hero */}
      <section className="relative py-24 text-center bg-gradient-to-r from-purple-700/30 via-yellow-600/10 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 text-purple-400"
        >
          Kingkos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-3xl mx-auto"
        >
          A web platform for renting costumes, traditional attire, formal wear, and more.  
          Menyediakan layanan penyewaan pakaian dengan berbagai kategori untuk acara spesial.
        </motion.p>
      </section>

      {/* About Project */}
      <section className="container mx-auto px-6 max-w-6xl mb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/projects/kingkos1.png"
            alt="Kingkos Preview"
            className="rounded-2xl shadow-xl hover:scale-105 transition"
          />
        </motion.div>

        {/* Right description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-6">
            About The Project
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Kingkos adalah platform berbasis web untuk penyewaan kostum, pakaian
            tradisional, busana formal, hingga pakaian tematik. Dengan sistem ini,
            pengguna bisa mencari, memesan, dan mengatur jadwal sewa secara online
            dengan mudah dan cepat.
          </p>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">⚡ Tech Stack</h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2">
                <FaLaravel className="text-red-500 text-xl" /> Laravel
              </li>
              <li className="flex items-center gap-2">
                <SiNextdotjs className="text-white text-xl" /> Next.js
              </li>
              <li className="flex items-center gap-2">
                <SiMysql className="text-blue-400 text-xl" /> MySQL
              </li>
              <li className="flex items-center gap-2">
                <SiTailwindcss className="text-teal-400 text-xl" /> TailwindCSS
              </li>
              <li className="flex items-center gap-2">
                <FaTshirt className="text-yellow-400 text-xl" /> Costume Rental
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Features Timeline */}
      <section className="container mx-auto px-6 max-w-5xl mb-20">
        <h3 className="text-2xl font-bold mb-10 text-center text-purple-400">
          Key Features
        </h3>
        <div className="space-y-10 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-700"></div>

          {/* Customer Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-1/2 pr-8 text-right"
          >
            <h4 className="font-semibold text-lg mb-2 text-purple-400">
              Customer Features
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Cari & filter kostum sesuai kategori</li>
              <li>Lihat detail & foto produk</li>
              <li>Booking & jadwal penyewaan</li>
              <li>Riwayat pemesanan</li>
            </ul>
          </motion.div>

          {/* Seller Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-1/2 md:ml-auto pl-8 text-left"
          >
            <h4 className="font-semibold text-lg mb-2 text-purple-400">
              Seller Features
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Upload kostum & detail harga</li>
              <li>Kelola stok & ketersediaan</li>
              <li>Konfirmasi & kelola pesanan</li>
              <li>Laporan penyewaan</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="container mx-auto px-6 max-w-6xl mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">
          Screenshots
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <img src="/projects/kingkos1.jpg" alt="Screen 1" className="rounded-xl shadow-lg hover:scale-105 transition" />
          <img src="/projects/kingkos2.png" alt="Screen 2" className="rounded-xl shadow-lg hover:scale-105 transition" />
          <img src="/projects/kingkos3.png" alt="Screen 3" className="rounded-xl shadow-lg hover:scale-105 transition" />
        </motion.div>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        <a
          href="https://kingkos.live/"
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-purple-500 to-yellow-500 flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          <FaExternalLinkAlt /> View Live
        </a>
        <a
          href="https://github.com/username/kingkos"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
        >
          <FaGithub /> View GitHub
        </a>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <Link href="/#projects">
          <span className="inline-block mt-4 bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition cursor-pointer">
            Back to Projects
          </span>
        </Link>
      </div>
    </main>
  );
}
