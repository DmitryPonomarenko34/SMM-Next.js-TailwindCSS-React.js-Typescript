"use client";
import { category } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav>
      <ul className="flex">
        <li className="mr-2 last:mr-0">
          <Link
            href={"/services"}
            className={`nav-link ${isActive("services") && "active-link"}`}
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href={"/reviews"}
            className={`nav-link ${isActive("reviews") && "active-link"}`}
          >
            Reviews
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href={"/principles"}
            className={`nav-link ${isActive("principles") && "active-link"}`}
          >
            How It Works
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href={"/benefits"}
            className={`nav-link ${isActive("benefits") && "active-link"}`}
          >
            Benefits
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href={"/faq"}
            className={`nav-link ${isActive("faq") && "active-link"}`}
          >
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
