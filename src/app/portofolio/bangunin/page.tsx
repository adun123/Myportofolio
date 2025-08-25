// src/app/portofolio/bangunin/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLaravel, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import Image from "next/image";
export default function BanguninPage() {
  return (
    <main className="bg-gray-950 min-h-screen text-white pb-20">
      {/* Hero */}
      <section className="relative py-20 text-center bg-gradient-to-r from-amber-600/20 via-yellow-800/10 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Bangun.in
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-3xl mx-auto"
        >
          A Laravel-based web platform that connects users with construction service providers, interior, and exterior designers. 
          It simplifies the process for customers to search, order, and 
          monitor the progress of home construction in an integrated way.
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
            src="/projects/project2.png"
            alt="Bangun.in Preview"
            className="rounded-2xl shadow-xl hover:scale-105 transition"
          />
        </motion.div>

        {/* Right side description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-amber-400 mb-6">
            About The Project
          </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-justify">
             Bangun.in is a platform built with Laravel, MySQL, and TailwindCSS 
             that connects clients with construction and home design service providers. It helps manage orders, track project progress, 
             and streamline communication between users and contractors.
            </p>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              ⚡ Tech Stack
            </h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2">
                <FaLaravel className="text-red-500 text-xl" /> Laravel
              </li>
              <li className="flex items-center gap-2">
                <SiTailwindcss className="text-sky-400 text-xl" /> TailwindCSS
              </li>
              <li className="flex items-center gap-2">
                <SiMysql className="text-blue-400 text-xl" /> MySQL
              </li>
              <li className="flex items-center gap-2">
                <FaHtml5 className="text-orange-500 text-xl" /> HTML5
              </li>
              <li className="flex items-center gap-2">
                <FaCss3Alt className="text-blue-500 text-xl" /> CSS3
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Features Timeline */}
      <section className="container mx-auto px-6 max-w-5xl mb-20">
        <h3 className="text-2xl font-bold mb-10 text-center">Key Features</h3>
        <div className="space-y-8 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-700"></div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-1/2 pr-8 text-right"
          >
            <h4 className="font-semibold text-lg mb-2 text-amber-400">
              User Features
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Find and book construction or design services easily</li>
                <li>Browse contractor portfolios for inspiration</li>
                <li>Track your home building progress in real-time</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-1/2 md:ml-auto pl-8 text-left"
          >
            <h4 className="font-semibold text-lg mb-2 text-amber-400">
              Admin Features
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Manage contractors & users</li>
                <li>Verify portfolios</li>
                <li>Moderate comments</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-6 max-w-6xl mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Screenshots</h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
        >
          <img
            src="/projects/bangun1.png"
            alt="Screen 1"
            className="rounded-xl shadow-lg hover:scale-105 transition inline-block"
          />
          <img
            src="/projects/bangun2.png"
            alt="Screen 2"
            className="rounded-xl shadow-lg hover:scale-105 transition inline-block"
          />
          <img
            src="/projects/bangun3.png"
            alt="Screen 3"
            className="rounded-xl shadow-lg hover:scale-105 transition inline-block"
          />
          <img
            src="/projects/bangun4.png"
            alt="Screen 4"
            className="rounded-xl shadow-lg hover:scale-105 transition inline-block"
          />
           <img
            src="/projects/bangun5.png"
            alt="Screen 5"
            className="rounded-xl shadow-lg hover:scale-105 transition inline-block"
          />
          <img
            src="/projects/bangun6.png"
            alt="Screen 6"
            className="rounded-xl shadow-lg hover:scale-105 transition inline-block"
          />
        </motion.div>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        <a
          href="https://bangunin.my.id/"
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-amber-500 to-orange-600 flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          <FaExternalLinkAlt /> View Live
        </a>
        <a
          href="https://github.com/adun123/Bangunin.git"
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
          <span className="inline-block mt-4 bg-amber-500 text-white px-6 py-3 rounded-xl hover:bg-amber-600 transition cursor-pointer">
            Back to Projects
          </span>
        </Link>
      </div>
    </main>
  );
}
