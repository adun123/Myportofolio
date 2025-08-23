// src/app/portofolio/aquaculture/page.tsx
"use client";

import Link from "next/link";
import { FaReact, FaNodeJs, FaLaravel, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";

// ...
<div className="mt-10">
  <h2 className="text-2xl font-semibold text-white mb-4">⚡ Tech Stack</h2>
  <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <li className="flex items-center gap-2 text-gray-300">
      <FaReact className="text-cyan-400 text-xl" /> React
    </li>
    <li className="flex items-center gap-2 text-gray-300">
      <SiNextdotjs className="text-white text-xl" /> Next.js
    </li>
    <li className="flex items-center gap-2 text-gray-300">
      <SiTailwindcss className="text-sky-400 text-xl" /> TailwindCSS
    </li>
    <li className="flex items-center gap-2 text-gray-300">
      <FaNodeJs className="text-green-500 text-xl" /> Node.js
    </li>
    <li className="flex items-center gap-2 text-gray-300">
      <FaLaravel className="text-red-500 text-xl" /> Laravel
    </li>
    <li className="flex items-center gap-2 text-gray-300">
      <SiMysql className="text-blue-400 text-xl" /> MySQL
    </li>
  </ul>
</div>

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function AquaculturePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-white pb-20">
      {/* Hero */}
      <section className="relative py-20 text-center bg-gradient-to-r from-primary/20 via-purple-700/10 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          AquaCulture
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Smart Water Monitoring — Real-time IoT dashboard for monitoring water
          quality using Laravel & MQTT.
        </motion.p>
      </section>

      {/* About Project */}
      <section className="container mx-auto px-6 max-w-5xl mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary">
            About The Project
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            AquaCulture is an IoT-based monitoring system built using Laravel
            for backend, MQTT for communication, and SQL Server / MySQL for data
            storage. I developed both admin and user interfaces, real-time
            sensor dashboards, and data visualization features to help fish
            farmers monitor water quality.
          </p>

          {/* Tech Stack */}
          <div className="mt-10 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">⚡ Tech Stack</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              
              <li className="flex items-center gap-2 text-gray-300">
                <SiTailwindcss className="text-sky-400 text-xl" /> TailwindCSS
              </li>
              
              <li className="flex items-center gap-2 text-gray-300">
                <FaLaravel className="text-red-500 text-xl" /> Laravel
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <SiMysql className="text-blue-400 text-xl" /> MySQL
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-xl mb-3">Roles & Features</h3>

            <div className="grid sm:grid-cols-2 gap-8 text-gray-300">
              <div>
                <h4 className="font-semibold text-lg mb-2">User Features</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Real-time dashboard monitoring pH & temperature</li>
                  <li>Email alert if water quality is critical</li>
                  <li>History & charts of sensor data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Admin Features</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Manage user accounts</li>
                  <li>View all sensor logs & reports</li>
                  <li>Access data analytics & export reports</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-6 max-w-6xl mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Screenshots</h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <img
            src="/projects/aqua1.png"
            alt="User Dashboard"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="/projects/aqua2.png"
            alt="Admin Dashboard"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="/projects/aqua3.png"
            alt="User Feature"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="/projects/aqua4.png"
            alt="Admin Feature"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
        </motion.div>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        <a
          href="https://aquaculture.my.id/"
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-primary to-pink-600 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          <FaExternalLinkAlt /> View Live
        </a>
        <a
          href="https://github.com/adun123/AquaCulture.git"
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
          <span className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition cursor-pointer">
            Back to Projects
          </span>
        </Link>
      </div>
    </main>
  );
}
