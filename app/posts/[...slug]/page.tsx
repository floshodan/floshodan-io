import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from 'components/mdx'
import { getMDXComponent } from 'next-contentlayer/hooks'


interface ISingleBlogPost {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<ISingleBlogPost["params"][]> {

  return allPosts.map((post) => ({
        slug: post.slugAsParams.split("/"),
  }));
}

export default async function Blog({ params } : any) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugs === slug);

  if (!post) {
    //console.log(post)
    return 0;
  }

   const MDXContent = getMDXComponent(post.body.code)

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-4xl py-16">
        <div className="mb-6 text-center">
        </div>
        <div className="mb-6">
          <h1 className="mb-1 text-3xl dark:text-slate-100 font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
              <Mdx code={post.body.code} />
      </article>
    </>
  )
}

