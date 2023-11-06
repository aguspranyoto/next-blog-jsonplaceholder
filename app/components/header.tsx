import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#96B6C5]">
      <div className="container px-60 mx-auto flex justify-between py-4 text-white">
        <Link href="/">Aguud</Link>
        <ul className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/portfolio">Portfolio</Link>
        </ul>
      </div>
    </header>
  );
}
