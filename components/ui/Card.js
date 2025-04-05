// components/ui/Card.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Card({ project }) {
  const { title, url, github, github2, tech, description, image, slug, id } =
    project;

  // Fallback protection
  if (!slug) {
    console.warn("❗ Missing slug for project:", project);
    return null;
  }

  return (
    <div className="shadow-lg max-w-sm dark:bg-gray-800 rounded-md overflow-hidden m-3">
      {/* Project Image */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={225}
        quality={100}
        className="w-full h-56 object-cover hidden lg:block"
      />

      {/* Card Body */}
      <div className="flex flex-col space-y-2 p-4">
        <h5 className="text-white text-xl font-bold">{title}</h5>
        <p className="text-gray-400 line-clamp-3">{description}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Link
            href={`/projects/${slug}`}
            className="font-blackhawk border-2 px-6 py-3 border-orange text-orange text-center hover:bg-orange hover:text-white transition duration-300 ease-in-out lg:text-2xl"
            aria-label={`View more about ${title}`}
          >
            View More
          </Link>

          {url ? (
            <Button
              href={url}
              target="_blank"
              customClasses="w-full text-center"
              ariaLabel={`Open live site for ${title}`}
            >
              Live Site
            </Button>
          ) : (
            <span className="px-6 py-3 text-center text-gray-500 border border-gray-600 rounded  flex items-center justify-center">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
