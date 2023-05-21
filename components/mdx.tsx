import * as React from 'react';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { clsxm } from "utils";
import Pre from './pre';

const CustomLink = (props : any) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
  a: CustomLink,
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={clsxm(
        "relative rounded border bg-gray-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-base text-gray-600",
        className
      )}
      {...props}
    />
  ),
  pre: Pre,
     h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={clsxm(
          'font-bold dark:text-white text-slay-100',
          className
        )}
        {...props}
      />
    ),

     p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={clsxm(
          'mt-6 text-base text-zinc-600 dark:text-slate-100',
          className
        )}
        {...props}
      />
    ),

};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={{ ...components }} />
    </article>
  );
}