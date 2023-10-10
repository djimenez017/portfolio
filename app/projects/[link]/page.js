"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const url = searchParams.get("url");
  const git1 = searchParams.get("git1");
  const git2 = searchParams.get("git2");
  const tech = searchParams.get("tech");
  const description = searchParams.get("description");
  const image = searchParams.get("image");
  const link = searchParams.get("link");

  const techStack = JSON.parse(tech);

  const stack = techStack.map((techs) => {
    return <p>{techs}</p>;
  });
  console.log(techStack);
  console.log(stack);

  return (
    <div className="md:w-[1200px] mx-auto md:min-w-1200 bg-orange">
      <Image src={image} width={300} height={200} alt={title} />
      <br />
      {title} <br />
      <p>{description}</p>
      {stack}
      <a href={git1}>Github</a>
      <br />
      {git2 === "" ? "" : <a href={git2}>Git Back End</a>} <br />
      <Link href={url}>Live Site</Link>
    </div>
  );
}
