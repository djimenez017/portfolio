import Button from "@/components/ui/Button";
import Link from "next/link";
import AnimatedLogo from "@/components/ui/AnimatedLogo";

export default function Landing() {
  return (
    <div className="md:w-11/12 flex flex-col md:flex-row  ">
      <div className=" w-11/12 lg:w-1/2 flex flex-col mx-auto ">
        <div className=" md:mx-auto text-left">
          <p className="text-lightGrey text-lg mb-2">Hello there, my name is</p>
          <h1 className="text-5xl lg:text-8xl font-bold pb-6 text-orange font-blackhawk">
            Daniel Jimenez
          </h1>
          <p className="text-white text-lg lg:text-2xl">
            Web Developer with a background in IT infrastructure and a passion
            for building modern, efficient, user-focused web apps.
          </p>
          <br></br>
          <div className="flex flex-row gap-4 mt-8">
            <Button href={"/#Contact"} customClasses="mr-2">
              Contact
            </Button>
            <Link
              href={"/DanielJimenez.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
              download
              className="w-36 lg:text-2xl lg:w-48 border-2 px-6 py-3 border-orange flex justify-around items-center text-orange cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out font-blackhawk"
            >
              My Resume
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 justify-center hidden lg:flex">
        <AnimatedLogo size={400} />
      </div>{" "}
    </div>
  );
}
