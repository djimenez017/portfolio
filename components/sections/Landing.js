import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";

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
          <Button href={"/#Contact"}>Contact</Button>
        </div>
      </div>
      <div className="w-1/2 justify-center hidden lg:flex">
        <Image src={Logo} width={350} height={350} alt="Daniel Jimenez" />
      </div>{" "}
    </div>
  );
}
