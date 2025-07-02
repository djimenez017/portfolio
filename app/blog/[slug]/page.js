import { sanityClient } from "@/lib/sanity.client";
import { postBySlugQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) return null;

      return (
        <img
          src={value.asset.url}
          alt={value.alt || ""}
          className="my-4 rounded-lg"
        />
      );
    },
  },
};

export default async function PostPage({ params }) {
  const post = await sanityClient.fetch(postBySlugQuery(params.slug));

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      <div className="mt-6 prose prose-neutral">
        <PortableText value={post.body} components={components} />
      </div>
    </div>
  );
}
