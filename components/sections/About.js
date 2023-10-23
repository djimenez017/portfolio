import SkillsImages from "../ui/SkillsImages";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="w-10/12 lg:w-1/2 flex flex-col mx-auto ">
        <h2 className="text-2xl lg:text-5xl font-bold py-6 text-orange font-custom">
          About
        </h2>
        <p className="text-lg lg:text-xl lg:pr-10">
          I am a web developer with 5 years of coding experience and 2 years of
          professional work. I am driven by a passion for learning and staying
          current with the latest techniques and best practices. I am not just a
          developer; I am a lifelong learner.
          <br />
        </p>
      </div>
      <div className="w-10/12 lg:w-1/2 flex flex-col mx-auto">
        <SkillsImages />
      </div>
    </div>
  );
}
