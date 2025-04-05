import projects from "../../../assets/files/Projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({ params }) {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-white text-center py-20">
        <h1 className="text-3xl font-bold">404 – Project Not Found</h1>
        <p className="text-gray-400 mt-4">
          We couldn’t find a project with that slug.
        </p>
        <Link href="/" className="text-orange underline mt-4 inline-block">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4 font-blackhawk">
        {project.title}
      </h1>

      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={500}
        className="rounded-lg mb-6 w-10/12 object-cover"
        priority
      />

      <p className="text-gray-300 text-lg mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-3 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-orange text-black text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {project.url && (
          <Link
            href={project.url}
            target="_blank"
            className="bg-orange text-black font-semibold px-6 py-2 rounded hover:bg-white transition"
          >
            Live Site
          </Link>
        )}
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-600 transition"
          >
            GitHub (Frontend)
          </Link>
        )}
        {project.github2 && (
          <Link
            href={project.github2}
            target="_blank"
            className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-600 transition"
          >
            GitHub (Backend)
          </Link>
        )}
      </div>
    </div>
  );
}
