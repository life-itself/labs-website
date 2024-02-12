import Head from "next/head";
import Nav from "./Nav";
import siteConfig from "../config/siteConfig";
import navLinks from "../config/navLinks.js";
import { Navigation } from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <main>{children}</main>
      <footer className="w-full h-24 my-16">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="flex flex-wrap items-center justify-center pt-1"
            aria-label="Footer"
          >
            <Navigation
              footer
              links={navLinks}
              className="text-base hover:text-neutral-900 mx-5 pt-0"
            />
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {siteConfig.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-neutral-900"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
          <p className="dark:text-xs dark:sm:text-sm text-neutral-900/70 flex flex-col lg:flex-row items-center justify-center mt-8 pb-4 sm:pb-1">
            Created by
            <a
              href={siteConfig.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-y-1 lg:space-y-0 no-underline"
            >
              <img
                src="/img/life-itself-logo.svg"
                alt={siteConfig.author}
                className="mx-2 h-4 inline-flex"
              />
              <span className="dark:text-xs sm:text-sm text-neutral-900/70">
                {`${siteConfig.author} Licensed under a CC-By 4.0 International License`}
              </span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
