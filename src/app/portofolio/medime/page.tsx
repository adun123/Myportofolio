// src/app/portofolio/medime/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLaravel, FaMobileAlt, FaDatabase } from "react-icons/fa";
import { SiFlutter, SiTailwindcss, SiMysql } from "react-icons/si";

export default function MedimePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-white pb-20">
      {/* Hero */}
      <section className="relative py-24 text-center bg-gradient-to-r from-emerald-700/30 via-teal-700/20 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 text-emerald-400"
        >
          Medime
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-3xl mx-auto"
        >
          Flutter app for pharmacy operations with Laravel backend.
          Memudahkan apotek dalam mengelola stok obat, resep, transaksi, dan laporan secara digital.
        </motion.p>
      </section>

      {/* About Project */}
      <section className="container mx-auto px-6 max-w-6xl mb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/projects/project3.png"
            alt="Medime Preview"
            className="rounded-2xl shadow-xl hover:scale-105 transition"
          />
        </motion.div>

        {/* Right side description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-emerald-400 mb-6">
            About The Project
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Medime adalah aplikasi mobile berbasis Flutter dengan backend Laravel
            yang berfokus pada manajemen apotek. Mulai dari manajemen stok obat,
            resep pasien, transaksi penjualan, hingga laporan penjualan harian
            semua terintegrasi dalam satu platform.
          </p>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">⚡ Tech Stack</h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2">
                <SiFlutter className="text-sky-400 text-xl" /> Flutter
              </li>
              <li className="flex items-center gap-2">
                <FaLaravel className="text-red-500 text-xl" /> Laravel
              </li>
              <li className="flex items-center gap-2">
                <SiMysql className="text-blue-400 text-xl" /> MySQL
              </li>
              <li className="flex items-center gap-2">
                <SiTailwindcss className="text-teal-400 text-xl" /> TailwindCSS
              </li>
              <li className="flex items-center gap-2">
                <FaMobileAlt className="text-green-400 text-xl" /> Mobile App
              </li>
              <li className="flex items-center gap-2">
                <FaDatabase className="text-yellow-400 text-xl" /> Database Mgmt
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 max-w-5xl mb-20">
        <h3 className="text-2xl font-bold mb-10 text-center">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg"
          >
            <h4 className="font-semibold text-lg mb-2 text-emerald-400">
              Pharmacy Features
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Manajemen stok obat & kadaluarsa</li>
              <li>Input resep pasien</li>
              <li>Transaksi penjualan cepat</li>
              <li>Riwayat transaksi pelanggan</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg"
          >
            <h4 className="font-semibold text-lg mb-2 text-emerald-400">
              Admin Features
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Kelola user & role</li>
              <li>Laporan penjualan harian/mingguan</li>
              <li>Monitoring stok & permintaan</li>
              <li>Integrasi dengan sistem backend</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="container mx-auto px-6 max-w-6xl mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Screenshots</h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <img src="/projects/medime1.png" alt="Screen 1" className="rounded-xl shadow-lg hover:scale-105 transition" />
          <img src="/projects/medime2.png" alt="Screen 2" className="rounded-xl shadow-lg hover:scale-105 transition" />
          <img src="/projects/medime3.png" alt="Screen 3" className="rounded-xl shadow-lg hover:scale-105 transition" />
        </motion.div>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        <button
          type="button"
          onClick={() => alert("Mohon maaf belum tersedia")}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          <FaExternalLinkAlt /> View Live
        </button>
        <a
          href="https://github.com/adun123/Medime.git"
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
          <span className="inline-block mt-4 bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition cursor-pointer">
            Back to Projects
          </span>
        </Link>
      </div>
    </main>
  );
}
