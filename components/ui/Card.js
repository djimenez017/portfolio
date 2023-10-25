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
        className="w-full object-cover hidden lg:block "
        alt={title}
      />
      <div className="p-5">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-xl lg:text-2xl tracking-tight mb-2 dark:text-white">
            {title}
          </h5>
        </a>
        <p
          className="font-normal text-gray-700 mb-3 dark:text-gray-400"
          style={{
            height: "6em", // Adjust the height as needed
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </p>

        <div className="flex">
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
            className="w-48 border-2 px-6 py-3 border-orange flex justify-around items-center text-orange cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out  lg:text-lg"
          >
            View More
          </Link>
          <Button href={url} target={"_blank"} customClasses="ml-2">
            Live Site
          </Button>
        </div>
      </div>
    </div>
  );
}
