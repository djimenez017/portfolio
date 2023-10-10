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
    <div className="grid grid-cols-4 md:grid-cols-3 gap-1 bg-lightGrey">
      <div className="p-4 ">
        <Image src={Html} width={120} height={120} alt="HTML" className="" />
      </div>
      <div className="p-4">
        <Image src={Css} width={120} height={120} alt="CSS" className="" />
      </div>
      <div className="p-4">
        <Image
          src={Tailwind}
          width={120}
          height={120}
          alt="Tailwind"
          className="grid place-content-center"
        />
      </div>
      <div className="p-4">
        <Image
          src={Javascript}
          width={120}
          height={120}
          alt="Javascript"
          className=""
        />
      </div>
      <div className="p-4">
        <Image
          src={ReactLogo}
          width={120}
          height={120}
          alt="ReactJS"
          className=""
        />
      </div>
      <div className="p-4">
        <Image
          src={Next}
          width={120}
          height={120}
          alt="NextJS"
          className="grid place-items-center"
        />
      </div>
      <div className="p-4">
        <Image
          src={GraphQL}
          width={120}
          height={120}
          alt="GraphQL"
          className=""
        />
      </div>
      <div className="p-4">
        <Image
          src={Prisma}
          width={120}
          height={120}
          alt="Prisma"
          className="grid place-items-center"
        />
      </div>
      <div className="p-4">
        <Image
          src={Express}
          width={120}
          height={120}
          alt="Express"
          className="grid place-items-center"
        />
      </div>
    </div>
  );
}
