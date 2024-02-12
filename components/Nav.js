import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

import navLinks from "../config/navLinks.js";
import Logo from "./Logo.js";

export const Navigation = ({ mobile, footer, links, className }) => {
  const router = useRouter();

  return links.map((item) => (
    <Link key={item.name} href={item.href}>
      <a
        aria-current={router.asPath == item.href ? "page" : undefined}
        className={`no-underline group pt-1 relative h-fit ${className}
          ${
            mobile &&
            `block border-l-4 pl-3 pr-4 py-2 ${
              router.asPath == item.href
                ? "border-neutral-900"
                : "border-transparent"
            }`
          }`}
      >
        <h1
          className={`font-medium ${
            footer &&
            "text-neutral-900/70 hover:text-neutral-900 ease-in-out duration-300"
          }`}
        >
          {item.name}
        </h1>
        {!mobile && (
          <span
            className={`absolute bottom-0 left-0 h-0.5 w-full ease-in-out duration-300 ${
              router.asPath == item.href && !footer
                ? "bg-neutral-900"
                : "group-hover:bg-neutral-900"
            }
        `}
          />
        )}
      </a>
    </Link>
  ));
};

export default function Nav() {
  return (
    <Disclosure as="nav" className="absolute w-full z-50">
      {({ open }) => (
        <>
          <div className="sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16 sm:h-24">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md dark:bg-transparent text-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-900">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Logo />
                </div>
                <div className="hidden sm:flex sm:space-x-16 items-center">
                  <Navigation links={navLinks} className="text-lg" />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden shadow-md flex items-center">
            <Disclosure.Button className="dark:bg-yellow-400 justify-start p-0">
              <div className="pt-2 pb-4 space-y-1">
                <Navigation
                  mobile
                  links={navLinks}
                  className="!text-left text-md text-neutral-900"
                />
              </div>
            </Disclosure.Button>
          </Disclosure.Panel>
          {/* <div className="w-full h-px bg-neutral-100 opacity-50" /> */}
        </>
      )}
    </Disclosure>
  );
}
