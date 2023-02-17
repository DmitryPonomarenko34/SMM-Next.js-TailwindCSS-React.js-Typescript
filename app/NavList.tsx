import { category } from "@/constants";
import Link from "next/link";

export default function NavList() {
  return (
    <nav className="">
      <ul>
        {category.map((category) => (
          <li key={category}>
            <Link href={`/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
