import ProjectsList from "@/assets/files/Projects";
import Card from "@/components/ui/Card";
import ExpenseSC from "@/assets/images/Projects/expenses.gif";
import LittleSC from "@/assets/images/Projects/LittleLemon.png";

const ListofProjects = ProjectsList.map((project) => {
  console.log(project.title);
  return (
    <Card
      title={project.title}
      url={project.url}
      git1={project.github}
      git2={project.github2}
      tech={project.tech}
      description={project.description}
      image={project.image}
    />
  );
});

export default function Projects() {
  return (
    <div>
      Projects
      {ListofProjects}
    </div>
  );
}
