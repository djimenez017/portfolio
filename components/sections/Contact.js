import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <div className="flex flex-col items-center text-center w-10/12">
      <h2 className="text-2xl lg:text-5xl font-bold py-6 text-orange font-custom">
        Contact Me
      </h2>
      <p className="text-lg lg:text-xl">
        Want to talk about Javascript, movies, or video games? Reach out to me
        if you'd like to talk about my experiences or if you need help with a
        project.
      </p>
      <br />
      <br />
      <div className="flex flex-col md:flex-row md:space-x-4">
        <Button
          href={"mailto:djimenez017@gmail.com"}
          flexDirection="row"
          text="Email Me"
          customClasses="mb-4"
        >
          <AiOutlineMail />
        </Button>
        <Button
          href={"https://twitter.com/Dann3rs"}
          target={"_blank"}
          flexDirection="row"
          text="X"
          customClasses="mb-4"
        >
          <RiTwitterXFill />
        </Button>
        <Button
          href={"https://github.com/djimenez017"}
          target={"_blank"}
          flexDirection="row"
          text="GitHub"
          customClasses="mb-4"
        >
          <AiFillGithub />
        </Button>
        <Button
          href={"https://www.linkedin.com/in/djimenez017/"}
          target={"_blank"}
          flexDirection="row"
          text="LinkedIn"
        >
          <AiFillLinkedin />
        </Button>
      </div>
    </div>
  );
}
