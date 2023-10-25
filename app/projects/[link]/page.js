"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Expense from "@/assets/images/Projects/expenses.gif";
import Lemon from "@/assets/images/Projects/LittleLemon.png";
import Jmg from "@/assets/images/Projects/jmg.png";
import Button from "@/components/ui/Button";

export default function Page() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const url = searchParams.get("url");
  const git1 = searchParams.get("git1");
  const git2 = searchParams.get("git2");
  const tech = searchParams.get("tech");
  const description = searchParams.get("description");
  const link = searchParams.get("link");
  const id = searchParams.get("id");

  const techStack = JSON.parse(tech);

  const stack = techStack.map((techs) => {
    return (
      <span className="bg-orange px-2 py-1 mr-2 mt-2" key={id}>
        {techs}
      </span>
    );
  });

  let projectImage;

  switch (title) {
    case "Expense App":
      projectImage = (
        <Image src={Expense} width={800} height={600} alt={title} />
      );
      break;
    case "Little Lemon":
      projectImage = <Image src={Lemon} width={800} height={600} alt={title} />;
      break;
    case "JMG Photography":
      projectImage = <Image src={Jmg} width={800} height={600} alt={title} />;
      break;
    default:
      break;
  }

  return (
    <div className="md:w-[1200px] mx-auto md:min-w-1200">
      <div className="flex flex-row justify-center"> {projectImage}</div>

      <br />
      <div className="w-10/12 md:w-1/2 flex flex-col mx-auto ">
        <h2 className="text-5xl font-bold py-6 text-orange">{title}</h2>
        <br />
        <p>{description}</p> <br />
        <p className=" text-lg">The Stack</p>
        <div className="flex flex-row flex-wrap">{stack}</div> <br />
        <br />
        <div className="flex flex-row flex-wrap">
          <Button href={git1} target="_blank">
            Github
          </Button>
          <br />
          {git2 === "" ? (
            ""
          ) : (
            <Button href={git2} target="_blank">
              Git Back-end
            </Button>
          )}{" "}
          <br />
          <Button href={url}>Live Site</Button>
        </div>
      </div>
    </div>
  );
}
