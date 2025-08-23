export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  userImage: string;
  adminImage: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistem Informasi Manajemen Apotek",
    description: "Aplikasi untuk manajemen obat, penjualan, dan laporan apotek.",
    features: [
      "CRUD Obat",
      "Penjualan & Laporan",
      "Multi Role (Owner, Karyawan, Pelanggan)",
    ],
    userImage: "/projects/project1-user.jpg",
    adminImage: "/projects/project1-admin.jpg",
  },
  {
    id: "2",
    title: "Dashboard Monitoring Sensor Air",
    description: "Monitoring suhu, pH, dan DO secara real-time dengan WebSocket.",
    features: ["Realtime WebSocket", "Chart Analitik", "Manajemen Perangkat"],
    userImage: "/projects/project2-user.jpg",
    adminImage: "/projects/project2-admin.jpg",
  },
];
