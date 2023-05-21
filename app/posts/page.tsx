import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";



export default async function BlogPage() {
  return (
    <main className="px-4 pt-14 h-10 max-w-5xl mx-auto mb-auto w-full">
      {allPosts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.url}
            className="flex flex-col space-y-1 mb-4"
            href={`${post.url}`}
          >
            <div className="w-full flex flex-col">
              <h2 className="text-2xl dark:hover:text-sky-400 dark:text-slate-100 hover:text-sky-500">{post.title}</h2>
              <time dateTime={post.date} className="text-sm text-slate-600 dark:text-gray-100">
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>

              <div>
                <p className="dark:text-slate-100">{post.summary}</p>
              </div>
              <div className="relative z-10 text-sky-500 dark:text-sky-600">
                <span
                  className="flex items-center text-sm font-medium"
                >
                  read more
                  <svg
                    className="ml-0.5 h-4 w-4 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
    </main>
  );
}
