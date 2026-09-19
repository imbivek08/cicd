import Link from "next/link";

const BlogCard = ({ post }) => (
  <Link
    href={`/blog/${post.slug}`}
    className="group terminal-window block h-full transition-all duration-300 hover:-translate-y-1 hover:border-[#7ee787]/60"
    aria-label={`Read ${post.title}`}
  >
    <div className="terminal-titlebar">
      <span className="terminal-dot bg-[#ff5f56]"></span>
      <span className="terminal-dot bg-[#ffbd2e]"></span>
      <span className="terminal-dot bg-[#27c93f]"></span>
      <span className="ml-2 truncate">~/{post.slug}.md</span>
    </div>
    <div className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3 text-xs text-[#8b949e]">
        <span className="text-[#7ee787]">{post.category}</span>
        <time dateTime={post.date}>{post.date}</time>
      </div>
      <h2 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-[#7ee787]">
        {post.title}
      </h2>
      <p className="mt-3 flex-grow text-sm leading-6 text-[#8b949e]">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {post.tags?.map((tag) => (
          <span key={tag} className="rounded-full border border-[#30363d] bg-[#161b22] px-2.5 py-1 text-[10px] text-[#79c0ff]">
            #{tag}
          </span>
        ))}
      </div>
      <span className="mt-6 text-sm font-semibold text-[#7ee787] group-hover:text-white">
        Read article <span aria-hidden="true">-&gt;</span>
      </span>
    </div>
  </Link>
);

export default BlogCard;
