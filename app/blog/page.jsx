import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Bivek Yadav",
  description: "Weekly notes on software development, DevOps, and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <header className="mb-12 max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#7ee787]">$ ls ./blog</span>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          Weekly <span className="gradient-text">notes</span>
        </h1>
        <p className="mt-5 text-sm leading-7 text-[#8b949e] sm:text-base">
          Practical lessons, experiments, and things I learn while building software and infrastructure.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </main>
  );
}
