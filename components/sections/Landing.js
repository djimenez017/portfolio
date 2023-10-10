import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";

export default function Landing() {
  return (
    <div className="md:w-full flex flex-col md:flex-row">
      <div className="md:w-1/2 flex mx-auto">
        <div className=" md:mx-auto text-left">
          <p className="text-lightGrey text-lg">Hello there, my name is</p>
          <h1 className="text-7xl font-bold py-6 text-orange">
            Daniel Jimenez
          </h1>
          <p className="text-white text-xl">
            Front-end developer from Los Angeles, California
          </p>
          <br></br>
          <Button href={"/#Contact"}>Contact</Button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center invisible md:visible">
        <Image src={Logo} width={350} height={350} alt="Daniel Jimenez" />
      </div>
    </div>
  );
}
