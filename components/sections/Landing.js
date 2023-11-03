import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="md:w-full flex flex-col md:flex-row ">
      <div className=" w-10/12 lg:w-1/2 flex flex-col mx-auto ">
        <div className=" md:mx-auto text-left">
          <p className="text-lightGrey text-sm lg:text-lg">
            Hello there, my name is
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold py-6 text-orange">
            Daniel Jimenez
          </h1>
          <p className="text-white text-lg lg:text-2xl">
            I am a passionate Web developer with a knack for turning ideas into
            stunning digital experiences.
          </p>
          <br></br>
          <div className="flex">
            <Button href={"/#Contact"} customClasses="mr-2">
              Contact
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
      </div>
      <div className="w-1/2 justify-center hidden lg:flex">
        <Image src={Logo} width={350} height={350} alt="Daniel Jimenez" />
      </div>{" "}
    </div>
  );
}
