// src/app/portofolio/tanifest/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLaravel, FaShoppingCart, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";

export default function TanifestPage() {
  return (
    <main className="bg-gray-950 min-h-screen text-white pb-20">
      {/* Hero */}
      <section className="relative py-24 text-center bg-gradient-to-r from-green-700/30 via-yellow-600/10 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 text-green-400"
        >
          Tanifest
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-3xl mx-auto"
        >
          An e-commerce platform for buying fruits, vegetables, and spice packages.  
          Marketplace segar yang menghubungkan petani lokal dengan pembeli.
        </motion.p>
      </section>

      {/* About Project */}
      <section className="container mx-auto px-6 max-w-6xl mb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            About The Project
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Tanifest adalah platform e-commerce yang fokus pada penjualan hasil bumi
            seperti buah, sayuran, dan rempah-rempah. Aplikasi ini memudahkan petani
            lokal untuk memasarkan produknya dan pembeli untuk mendapatkan bahan segar
            dengan cepat, transparan, dan terpercaya.
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
                <FaShoppingCart className="text-orange-400 text-xl" /> E-Commerce
              </li>
              <li className="flex items-center gap-2">
                <FaDatabase className="text-yellow-400 text-xl" /> Database Mgmt
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right side image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/projects/tanifest1.png"
            alt="Tanifest Preview"
            className="rounded-2xl shadow-xl hover:scale-105 transition"
          />
        </motion.div>
      </section>

      {/* Features (2 Columns) */}
      <section className="container mx-auto px-6 max-w-5xl mb-20">
        <h3 className="text-2xl font-bold mb-10 text-center text-green-400">
          Key Features
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Customer Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg"
          >
            <h4 className="font-semibold text-lg mb-2 text-green-400">
              Customer Features
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Pilih & beli produk segar</li>
              <li>Keranjang belanja & checkout</li>
              <li>Lacak status pesanan</li>
            </ul>
          </motion.div>

          {/* Seller Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg"
          >
            <h4 className="font-semibold text-lg mb-2 text-green-400">
              Seller Features
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Upload produk & foto</li>
              <li>Kelola stok & harga</li>
              <li>Terima & proses pesanan</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="container mx-auto px-6 max-w-6xl mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-green-400">
          Screenshots
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <Image src="/projects/tanifest1.png" alt="Screen 1" className="rounded-xl shadow-lg hover:scale-105 transition" />
          <Image src="/projects/tanifest2.png" alt="Screen 2" className="rounded-xl shadow-lg hover:scale-105 transition" />
          <Image src="/projects/tanifest.png" alt="Screen 3" className="rounded-xl shadow-lg hover:scale-105 transition" />
        </motion.div>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        <a
          href="https://tanifest.live/"
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-green-500 to-lime-600 flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          <FaExternalLinkAlt /> View Live
        </a>
        <a
          href="https://github.com/username/tanifest"
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
          <span className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition cursor-pointer">
            Back to Projects
          </span>
        </Link>
      </div>
    </main>
  );
}
