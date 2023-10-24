import ProjectsList from "@/assets/files/Projects";
import Card from "@/components/ui/Card";

const ListofProjects = ProjectsList.map((project) => {
  return (
    <Card
      title={project.title}
      url={project.url}
      git1={project.github}
      git2={project.github2}
      tech={project.tech}
      description={project.description}
      image={project.image}
      link={project.link}
      key={project.id}
    />
  );
});

export default function Projects() {
  return (
    <div className="flex flex-col w-10/12 lg:w-1/2  mx-auto ">
      <h2 className="text-2xl lg:text-5xl font-bold py-6 text-orange font-custom ">
        Projects{" "}
      </h2>
      <div className="flex items-center justify-center flex-wrap lg:flex-nowrap ">
        {ListofProjects}
      </div>
    </div>
  );
}
