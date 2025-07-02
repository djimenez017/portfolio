import { sanityClient } from "@/lib/sanity.client";
import { allPostsQuery } from "@/lib/queries";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await sanityClient.fetch(
    allPostsQuery,
    {},
    { cache: "no-store" }
  );

  return (
    <div className="py-5 max-w-screen-xl mx-auto h-screen w-11/12 sm:w-8/12">
      <Link
        href="/"
        className="text-blue-600 hover:underline pb-10 text-orange font-blackhawk"
      >
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-6 font-blackhawk pt-5 sm:pt-10">
        Blog Posts
      </h1>
      {posts.map((post) => (
        <div key={post._id} className="mb-10">
          <Link href={`/blog/${post.slug.current}`}>
            <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-500 text-sm">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          <div className="flex gap-2 mt-1">
            {post.tags?.map((tag) => (
              <span
                key={tag.slug.current}
                className="text-xs bg-gray-200 rounded px-2 py-0.5"
              >
                #{tag.title}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
