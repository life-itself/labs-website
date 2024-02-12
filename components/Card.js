import Link from "next/link";

export default function Card({ item: { title, url, description, authors } }) {
  if (!(title && url)) return null
  return (
    <li className="group relative grid grid-flow-col items-start px-5 py-5 space-x-4 ease-in-out duration-300">
      <div className="pt-1.5 w-4 h-full">
        <img
          src="/img/hashtag-icon.svg"
          alt="#"
          width="30"
          height="30"
          className="w-full m-0"
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        <Link href={`/${url}`}>
          <a className="no-underline focus-visible:outline-none">
            <h4 className="dark:text-xl dark:2xl:text-2xl font-semibold m-0">
              <span className="group-hover:underline group-hover:subpixel-antialiased">
                {title}
              </span>
            </h4>
            {description && (
              <p className="mt-3 mb-0 dark:text-md dark:lg:text-lg dark:2xl-text-xl text-neutral-900/70">
                {description}
              </p>
            )}
            {authors && (
              <p className="mt-3 mb-0 dark:text-md dark:lg:text-lg dark:2xl-text-xl text-neutral-900/70 italic">
                {authors}
              </p>
            )}
          </a>
        </Link>
        <div className="mt-3">
          <Link href={`/${url}`}>
            <a className="button no-underline dark:text-slate-200 dark:hover:text-slate-200 focus-visible:outline-1 w-fit">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
}
