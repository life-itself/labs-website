import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import ContactForm from "./ContactForm";
import CardList from "./CardList";
import siteConfig from "../config/siteConfig";

const Avatar = dynamic(() => import("./Avatar"), {
  loading: () => (
    <div className="bg-neutral-900/70 w-40 h-40 2xl:w-24 2xl:h-24" />
  ),
});

const CustomLink = (props) => {
  const href = props.href.endsWith(".md") ? props.href.replace(".md", "") : props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
  Head,
  hr: (props) => <hr className="border-neutral-900" {...props} />,
  a: CustomLink,
  Avatar,
  ContactForm,
  CardList
};

export default function MdxPage({ children }) {
  const {
    Component,
    frontMatter: { url, title, description, authors, timeline },
  } = children;

  const SeoTitle = title ? title : url.split("/").pop().replace(/-/g, " ").replace(/^\w/, c => c.toUpperCase());

  return (
    <>
      <NextSeo
        title={SeoTitle}
        description={description ? description : siteConfig.tagline}
        openGraph={{
          images: siteConfig.nextSeo.openGraph.images,
        }}
      />
      <article className="prose break-words prose-headings:text-neutral-900 dark:prose-invert mx-auto pt-28 sm:pt-40 px-8 sm:px-4 lg:px-10 dark:lg:max-w-4xl">
        <header>
          {title && (
            <div className="my-6">
              <h1>{title}</h1>
            </div>
          )}
          {authors && <h3 className="italic">{authors}</h3>}
          {timeline && <h3 className="italic">{timeline}</h3>}
        </header>
        <section>
          <Component components={components} />
        </section>
      </article>
    </>
  );
}
