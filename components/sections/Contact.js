import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <div className="flex flex-col items-center text-center w-10/12">
      <h2 className="text-2xl lg:text-5xl font-bold py-6 text-orange ">
        Contact Me
      </h2>
      <p className="text-lg lg:text-xl">
        Up for some casual chat about JavaScript, movies, or video games? <br />{" "}
        Feel free to reach out if you want to discuss my experiences or need a
        hand with a project. I'm all ears!
      </p>
      <br />
      <br />
      <div className="flex flex-col md:flex-row md:space-x-4">
        <Button
          href={"mailto:djimenez017@gmail.com"}
          flexDirection="row"
          text="Email Me"
          customClasses="mb-4 w-52"
        >
          <AiOutlineMail />
        </Button>
        <Button
          href={"https://twitter.com/Dann3rs"}
          target={"_blank"}
          flexDirection="row"
          text="X"
          customClasses="mb-4 w-52"
        >
          <RiTwitterXFill />
        </Button>
        <Button
          href={"https://github.com/djimenez017"}
          target={"_blank"}
          flexDirection="row"
          text="GitHub"
          customClasses="mb-4 w-52"
        >
          <AiFillGithub />
        </Button>
        <Button
          href={"https://www.linkedin.com/in/djimenez017/"}
          target={"_blank"}
          flexDirection="row"
          text="LinkedIn"
          customClasses="w-52"
        >
          <AiFillLinkedin />
        </Button>
      </div>
    </div>
  );
}
