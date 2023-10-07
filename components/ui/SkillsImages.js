import Html from "@/assets/images/1-HTML.png";
import Css from "@/assets/images/2-CSS.png";
import Javascript from "@/assets/images/3-Javascript.png";
import ReactLogo from "@/assets/images/4-ReactJS.png";
import Next from "@/assets/images/6-NextJS.png";
import GraphQL from "@/assets/images/12-GraphQL.png";
import Prisma from "@/assets/images/13-Prisma.png";
import Tailwind from "@/assets/images/14-Tailwind.svg";
import Express from "@/assets/images/15-Express.png";
import Image from "next/image";

export default function SkillsImages() {
  return (
    <div className="w-full flex flex-col mx-auto ">
      <div className="w-full flex flex-row sm:w-1/2 md:w-1/3 p-4 ">
        <Image
          src={Html}
          width={150}
          height={150}
          alt="HTML"
          className="  m-4"
        />{" "}
        <Image src={Css} width={150} height={150} alt="CSS" className=" m-4" />{" "}
        <Image
          src={Tailwind}
          width={150}
          height={150}
          alt="Tailwind"
          className=" m-4"
        />{" "}
      </div>
      <div className="w-full flex flex-row sm:w-1/2 md:w-1/3 p-4">
        <Image
          src={Javascript}
          width={150}
          height={150}
          alt="Javascript"
          className=" m-4"
        />{" "}
        <Image
          src={ReactLogo}
          width={150}
          height={150}
          alt="ReactJS"
          className=" m-4"
        />{" "}
        <Image
          src={Next}
          width={150}
          height={150}
          alt="NextJS"
          className=" m-4"
        />{" "}
      </div>
      <div className="w-full flex flex-row sm:w-1/2 md:w-1/3 p-4">
        <Image
          src={GraphQL}
          width={150}
          height={150}
          alt="GraphQL"
          className=" m-4"
        />{" "}
        <Image
          src={Prisma}
          width={150}
          height={150}
          alt="Prisma"
          className=" m-4"
        />{" "}
        <Image
          src={Express}
          width={150}
          height={150}
          alt="Express"
          className=" m-4"
        />{" "}
      </div>
    </div>
  );
}
