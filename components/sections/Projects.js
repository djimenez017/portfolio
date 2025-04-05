import ProjectsList from "@/assets/files/Projects";
import Card from "@/components/ui/Card";

export default function Projects() {
  return (
    <section className="w-full px-2 py-8">
      <h2 className="text-2xl lg:text-5xl text-center font-bold text-orange font-blackhawk mb-10">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-2 max-w-screen-xl mx-auto">
        {ProjectsList.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
