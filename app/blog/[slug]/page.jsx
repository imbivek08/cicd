import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return post ? { title: `${post.title} | Bivek Yadav`, description: post.excerpt } : {};
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 text-white sm:px-6 lg:py-24">
      <article>
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#8b949e]">
          <span className="text-[#7ee787]">{post.category}</span>
          <span aria-hidden="true">/</span>
          <time dateTime={post.date}>{post.date}</time>
          {post.readTime && <><span aria-hidden="true">/</span><span>{post.readTime}</span></>}
        </div>
        <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-base leading-7 text-[#8b949e]">{post.excerpt}</p>
        <div className="mt-8 border-t border-[#30363d] pt-8 text-[15px] leading-8 text-[#c9d1d9] [&_a]:text-[#7ee787] [&_a]:underline [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-[#7ee787] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[#d7e0d5] [&_code]:rounded [&_code]:bg-[#161b22] [&_code]:px-1.5 [&_code]:py-1 [&_code]:text-[#79c0ff] [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-5 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-[#30363d] [&_pre]:bg-[#0d1117] [&_pre]:p-4 [&_pre]:text-sm [&_strong]:text-white">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
