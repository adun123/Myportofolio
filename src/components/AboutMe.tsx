// src/components/AboutMe.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { FaLaravel, FaGitAlt, FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  SiFlutter, SiDotnet, SiPostman, SiTailwindcss,
  SiFigma, SiMysql, SiMqtt, SiFirebase
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

export default function AboutMe() {
  const tools = [
    { icon: <FaLaravel className="text-red-500 text-4xl" />, name: "Laravel", desc: "PHP Framework" },
    { icon: <SiFlutter className="text-sky-500 text-4xl" />, name: "Flutter", desc: "Mobile Framework" },
    { icon: <SiFigma className="text-pink-500 text-4xl" />, name: "Figma", desc: "Design Tool" },
    { icon: <DiMsqlServer className="text-gray-300 text-4xl" />, name: "SQL Server", desc: "Database" },
    { icon: <SiMysql className="text-blue-400 text-4xl" />, name: "MySQL", desc: "Database" },
    { icon: <SiDotnet className="text-purple-600 text-4xl" />, name: "ASP.NET", desc: "Web Framework" },
    { icon: <FaGitAlt className="text-orange-500 text-4xl" />, name: "Git", desc: "Version Control" },
    { icon: <SiTailwindcss className="text-cyan-500 text-4xl" />, name: "TailwindCSS", desc: "CSS Framework" },
    { icon: <SiPostman className="text-orange-600 text-4xl" />, name: "Postman", desc: "API Testing" },
   
  ];

  const projects = [
    {
      img: "/projects/project1.png",
      title: "AquaCulture : Smart Water Monitoring",
      desc: "IoT dashboard for water quality using Laravel & MQTT.",
      slug: "aquaculture",
    },
    {
      img: "/projects/project2.png",
      title: "Bangun.in - Jasa Bangun & Desain Rumah",
      desc: "Web platform for construction & design services, built with Laravel.",
      slug: "bangunin",
    },
    {
      img: "/projects/project3.png",
      title: "Medime : pharmacy Management App",
      desc: "Flutter app for pharmacy operations with Laravel backend.",
      slug: "medime",
    },
      {
      img: "/projects/project4.png",
      title: "Tanifest - Fresh Produce Marketplace",
      desc: "An e-commerce platform for buying fruits, vegetables, and spice packages.",
      slug: "tanifest",
    },

      {
      img: "/projects/kingkos2.png",
      title: "Kingkos - Costume & Outfit Rental",
      desc: "A web platform for renting costumes, traditional attire, formal wear, and more.",
      slug: "kingkos",
    },
     {
      img: "/projects/project5.jpg",
      title: "Attendify  - Employee Attendance Managemen",
      desc: "sistem absensi karyawan real-time berbasis web.",
       slug: "attendify",
    },



  ];

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <img
            src="/profile.jpg"
            alt="Abdurrahman"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary mb-6 shadow-xl"
          />
          <h2 className="text-4xl font-extrabold mb-3">Abdurrahman</h2>
          <p className="max-w-2xl text-gray-300 mb-10 leading-relaxed">
  {`Hi, I'm Abdurrahman — a Web & Mobile Developer with experience
  in Laravel, Flutter, and .NET. I love creating scalable
  and user-friendly applications, and I'm always open to
  new opportunities & collaborations.`}
</p>


          <div className="flex gap-5 mb-14">
            <a
              href="/CV_Abdurrahman.pdf"
              className="bg-gradient-to-r from-primary to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition"
              download
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-200 transition"
            >
              View Projects
            </a>
          </div>

          <h3 className="text-3xl font-bold mb-10">Essential Tools I Use</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
              >
                <div className="mb-4">{tool.icon}</div>
                <h4 className="text-xl font-semibold">{tool.name}</h4>
                <p className="text-sm text-gray-400">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-12">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, idx) => (
              <Link href={`/portofolio/${project.slug}`} key={idx}>
                <div className="bg-white/10 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition overflow-hidden group">
                  <div className="overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-5 text-left">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{project.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="py-10 bg-black text-gray-400 text-center">
        <div className="mb-4">
          <h4 className="text-xl text-white font-semibold">Contact Me</h4>
        </div>

        <div className="flex justify-center gap-6 text-3xl mb-4">
          <a href="https://wa.me/62812345678" target="_blank" rel="noreferrer">
            <FaWhatsapp className="hover:text-green-400" />
          </a>
          <a href="https://github.com/username" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-white" />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-500" />
          </a>
          <a href="https://instagram.com/username" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500" />
          </a>
        </div>

        <p>Email: abdurrahman@example.com</p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} Abdurrahman. All rights reserved.</p>
      </footer>
    </>
  );
}
