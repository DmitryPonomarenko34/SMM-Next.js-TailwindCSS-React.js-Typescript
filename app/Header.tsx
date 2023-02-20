import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";

export default function Header() {
  return (
    <header className="py-8">
      <div className="custom-container mx-auto px-3 flex items-center py-4">
        <Link href="/" className="mr-8">
          <Image src="/logo.svg" alt="logo" width={72} height={20} />
        </Link>
        <NavList />
      </div>
    </header>
  );
}
