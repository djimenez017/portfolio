import SkillsImages from "../ui/SkillsImages";
import Button from "../ui/Button";
// import Resume from "@/public/DanielJimenez-WebDeveloper.pdf";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="w-10/12 lg:w-1/2 flex flex-col mx-auto ">
        <h2 className="text-2xl lg:text-5xl font-bold py-6 text-orange ">
          About
        </h2>
        <p className="text-lg lg:text-xl lg:pr-10">
          I am a web developer with 5 years of coding experience, including 2
          years of professional work. My motivation is fueled by a relentless
          passion for continuous learning and staying abreast of the most
          current techniques and industry best practices. I don't simply
          consider myself a developer. I am a dedicated lifelong learner.
          <br />
        </p>{" "}
        <br />
        <div className="flex">
          {" "}
          <Button href="/About" customClasses="mr-2">
            About Me
          </Button>
          <Link
            href={"/DanielJimenez-WebDeveloper.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            locale={false}
            download
            className="w-48 border-2 px-6 py-3 border-orange flex justify-around items-center text-orange cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out lg:text-lg"
          >
            My Resume
          </Link>
        </div>
      </div>
      <div className="w-10/12 lg:w-1/2 flex flex-col mx-auto">
        <br />
        <br />
        <SkillsImages />
      </div>
    </div>
  );
}
