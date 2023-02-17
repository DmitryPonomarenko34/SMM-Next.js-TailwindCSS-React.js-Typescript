import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={72} height={20} />
      </Link>
      <NavList />
    </header>
  );
}
