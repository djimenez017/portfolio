import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

export default function Contact() {
  return (
    <div className="flex flex-col text-center">
      {" "}
      <h2 className="text-2xl lg:text-5xl font-bold py-6 text-orange font-custom">
        Contact Me
      </h2>
      <p className="text-lg lg:text-xl">
        Want to talk about Javascript, movies, or video games? Reach out to me
        if youd like to talk about my experiences, or if you need help with a
        project.
      </p>
      <a href="mailto:djimenez017@gmail.com">
        <button
          href="mailto:"
          className="flex flex-row items-center w-48 justify-around border-2 border-orange px-8 py-2 mr-3 mb-3 text-orange cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out font-custom text-xl"
        >
          <AiOutlineMail /> Email
        </button>
      </a>
      <RiTwitterXFill />
      <AiFillGithub />
      <AiFillLinkedin />
    </div>
  );
}
