import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Card({
  title,
  url,
  git1,
  git2,
  tech,
  description,
  image,
  link,
  id,
}) {
  const techStack = JSON.stringify(tech);

  return (
    <div className="bg-grey border border-orange max-w-sm dark:bg-gray-800 dark:border-gray-700 md:mr-5 mb-5">
      <Image
        src={image}
        height={300}
        width={250}
        className="w-full object-cover hidden md:block "
      />
      <div className="p-5">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
          {description}
        </p>{" "}
        <Link
          href={{
            pathname: `/projects/${link}`,
            query: {
              title,
              url,
              git1,
              git2,
              tech: techStack,
              description,
              image,
              link,
              id,
            },
          }}
          className="border-2 border-orange  px-8 py-2 mr-2 text-orange cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out font-custom text-xl"
        >
          View More{" "}
        </Link>
        <Button href={url} target={"_blank"}>
          Live Site
        </Button>
      </div>{" "}
    </div>
  );
}
