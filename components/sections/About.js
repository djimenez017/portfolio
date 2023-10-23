import SkillsImages from "../ui/SkillsImages";
import Button from "../ui/Button";
// import Resume from "@/public/DanielJimenez-WebDeveloper.pdf";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="w-10/12 lg:w-1/2 flex flex-col mx-auto ">
        <h2 className="text-2xl lg:text-5xl font-bold py-6 text-orange font-custom">
          About
        </h2>
        <p className="text-lg lg:text-xl lg:pr-10">
          I am a web developer with 5 years of coding experience and 2 years of
          professional work. I'm driven by a passion for learning and staying
          current with the latest techniques and best practices. I'm not just a
          developer; I'm a lifelong learner.
          <br />
          {/* <Button href={Resume}>Download my resume</Button> */}
        </p>
      </div>
      <div className="w-10/12 lg:w-1/2 flex flex-col mx-auto">
        <SkillsImages />
      </div>
    </div>
  );
}
