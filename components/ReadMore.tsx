import Link from 'next/link';
import React from 'react'

interface ReadMoreProps {
    url: string;
    title: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ url, title }) => {
  return (
        <div className="mt-8">
          <div className="relative z-10 text-gray-700 dark:text-slate-100 dark:hover:text-sky-400 hover:text-sky-500">
            <Link
              href={`${url}`}
              className="flex items-center text-sm font-medium"
            >
                {title}
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
            </Link>
          </div>
        </div>
  )
}

export default ReadMore;
