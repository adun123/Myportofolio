import React from "react";
import Image from "next/image";
import { Project } from "../data/project";

interface Props {
  project: Project;
}

const PortfolioDetail: React.FC<Props> = ({ project }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>

      <h2 className="text-xl font-semibold mb-2">Fitur Utama:</h2>
      <ul className="list-disc list-inside mb-6">
        {project.features.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Tampilan User</h3>
          <Image
            src={project.userImage}
            alt="User Interface"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tampilan Admin</h3>
          <Image
            src={project.adminImage}
            alt="Admin Interface"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
