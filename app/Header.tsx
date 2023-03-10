import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import ThemeBtn from "./ThemeBtn";

export default function Header() {
  return (
    <header className="py-8 fixed w-full top-0 left-0 z-10">
      <div className="justify-between sm:justify-start custom-container mx-auto px-3 flex items-center py-4">
        <Link href="/" className="sm:mr-8">
          <Image src="/logo.svg" alt="logo" width={72} height={20} />
        </Link>
        <NavList />
        <ThemeBtn />
      </div>
    </header>
  );
}
