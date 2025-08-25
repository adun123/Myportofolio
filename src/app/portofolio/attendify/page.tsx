// src/app/portofolio/attendify/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaUserCheck, FaServer } from "react-icons/fa";
import { SiDotnet,  } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
export default function AttendifyPage() {
  return (
    <main className="bg-gray-950 min-h-screen text-white pb-20">
      {/* Hero */}
      <section className="relative py-24 text-center bg-gradient-to-r from-blue-700/30 via-indigo-700/10 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 text-blue-400"
        >
          Attendify
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-3xl mx-auto"
        >
          Web-based employee attendance system built with <span className="text-white font-semibold">ASP.NET Core</span> and{" "}
          <span className="text-white font-semibold">SQL Server (SSMS)</span> for reliable, real-time check-ins and reporting.
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
            src="/projects/attendify1.png"
            alt="Attendify Preview"
            className="rounded-2xl shadow-xl hover:scale-105 transition"
          />
        </motion.div>

        {/* Right description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-6">About The Project</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
            Attendify helps companies record employee attendance accurately and in real-time.
            Built with <span className="font-semibold text-white">ASP.NET Core</span> on the backend and
            <span className="font-semibold text-white"> Microsoft SQL Server</span> as the database (managed via SSMS),
            it supports leave requests, schedule management, and attendance reports ready for export.
            </p>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">⚡ Tech Stack</h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2">
                <SiDotnet className="text-blue-400 text-xl" /> ASP.NET Core
              </li>
              <li className="flex items-center gap-2">
                <DiMsqlServer className="text-red-400 text-xl" /> SQL Server (SSMS)
              </li>
              <li className="flex items-center gap-2">
                <FaServer className="text-indigo-300 text-xl" /> Entity Framework Core
              </li>
              <li className="flex items-center gap-2">
                <FaUserCheck className="text-green-400 text-xl" /> Attendance Workflow
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 max-w-5xl mb-20">
        <h3 className="text-2xl font-bold mb-10 text-center text-blue-400">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Employee */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <h4 className="font-semibold text-lg mb-4 text-green-400">Employee Features</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Daily check-in / check-out (web & QR-ready)</li>
                <li>Online leave & absence requests</li>
                <li>View attendance history & approval status</li>
            </ul>
          </motion.div>

          {/* HR / Management */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <h4 className="font-semibold text-lg mb-4 text-green-400">HR / Management Features</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Monitoring kehadiran real-time & rekap otomatis</li>
              <li>Manajemen shift & jadwal kerja</li>
              <li>Laporan kehadiran (CSV/XLSX) & statistik</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="container mx-auto px-6 max-w-6xl mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Screenshots</h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <img src="/projects/attendify2.png" alt="Screen 1" className="rounded-xl shadow-lg hover:scale-105 transition" />
          <img src="/projects/attendify3.png" alt="Screen 2" className="rounded-xl shadow-lg hover:scale-105 transition" />
          <img src="/projects/attendify4.png" alt="Screen 3" className="rounded-xl shadow-lg hover:scale-105 transition" />
        </motion.div>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        <a
          href="https://attendify.live/"
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          <FaExternalLinkAlt /> View Live
        </a>
        <a
          href="https://github.com/username/attendify"
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
          <span className="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition cursor-pointer">
            Back to Projects
          </span>
        </Link>
      </div>
    </main>
  );
}
