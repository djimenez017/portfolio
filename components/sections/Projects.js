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
    <div className="flex flex-col lg:flex-row ">
      <div className=" flex flex-col mx-auto ">
        <h2 className="text-2xl lg:text-5xl text-center font-bold py-6 text-orange">
          Projects{" "}
        </h2>
        <div className="flex items-center justify-center flex-wrap lg:flex-nowrap ">
          {ListofProjects}
        </div>
      </div>
    </div>
  );
}
