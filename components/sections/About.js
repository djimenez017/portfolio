import SkillsImages from "../ui/SkillsImages";
import Button from "../ui/Button";
// import Resume from "@/public/DanielJimenez-WebDeveloper.pdf";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="w-10/12 lg:w-1/2 flex flex-col mx-auto ">
        <h2 className="text-2xl lg:text-5xl font-bold py-6 text-orange font-blackhawk">
          About
        </h2>
        <p className="text-md lg:text-xl lg:pr-10 ">
          I started my tech career right out of college at Exact Staff, working
          in IT support. With a background in Computer Information Technology
          and a strong interest in web development, I quickly transitioned into
          front-end work contributing to internal tools and business websites
          using JavaScript and React. <br /> <br />
          That initiative led to a promotion into a dedicated Web Developer
          role, where I built real-world applications and expanded my knowledge
          in TypeScript, GraphQL, and modern development workflows. <br />{" "}
          <br />
          Today, Im bringing together my development skills and systems
          background to pursue full-time or freelance roles in front-end or
          full-stack development. I love solving problems with clean, scalable
          code and Im always learning.
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
            className="font-blackhawk w-48 border-2 px-6 py-3 lg:text-3xl border-orange flex justify-around items-center text-orange cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out "
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
