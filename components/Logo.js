import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center space-x-2">
        <img src="/img/life-itself-logo.svg" alt="Life Itself Labs" width={10} height={10} className="w-8 sm:w-10" />
      </a>
    </Link>
  );
}
