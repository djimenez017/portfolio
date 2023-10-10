import SkillsImages from "../ui/SkillsImages";

export default function About() {
  return (
    <div>
      {" "}
      <div className="flex flex-col md:flex-row ">
        <div className="w-10/12 md:w-1/2 flex flex-col mx-auto ">
          <h2 className="text-5xl font-bold py-6 text-orange font-custom">
            About
          </h2>
          <p className="text-xl md:pr-10">
            It was my senior year of college, my objective was to graduate with
            my degree in Computer Information Technology. I was in a Web
            development class as part of my minor and I knew at that moment I
            wanted to be a Developer <br />
            <br />
          </p>
        </div>
        <div className="w-10/12 md:w-1/2 flex flex-col mx-auto">
          <SkillsImages />
        </div>
      </div>
    </div>
  );
}
