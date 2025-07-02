import { sanityClient } from "@/lib/sanity.client";
import { topThree } from "@/lib/queries";
import Link from "next/link";

export default async function Blog() {
  const posts = await sanityClient.fetch(topThree, {}, { cache: "no-store" });

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="mb-10 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-row bg-lightGrey"
        >
          <img
            src={post.image?.asset?.url}
            alt={post.title}
            className="w-full object-cover rounded-lg mb-4 w-4/12"
            width={200}
            height={100}
          />
          <div className="w-7/12 pl-4 flex flex-col ">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
