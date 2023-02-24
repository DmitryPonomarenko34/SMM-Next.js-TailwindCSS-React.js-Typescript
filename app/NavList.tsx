"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function NavList() {
  const pathname = usePathname();
  const [isActiveMenu, toggleMenu] = useState(false);

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav className="order-first sm:order-none sm:flex-auto">
      <button
        className="block sm:hidden"
        onClick={() => toggleMenu(!isActiveMenu)}
      >
        {isActiveMenu ? (
          <XMarkIcon color="dark:text-zinc-300" width={24} height={24} />
        ) : (
          <Bars3Icon color="dark:text-zinc-300" width={24} height={24} />
        )}
      </button>
      <ul className={`menu ${isActiveMenu && "active"}`}>
        <li className="nav-item">
          <Link
            href="/services"
            className={`nav-link ${isActive("services") && "active-link"}`}
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/reviews"
            className={`nav-link ${isActive("reviews") && "active-link"}`}
          >
            Reviews
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/principles"
            className={`nav-link ${isActive("principles") && "active-link"}`}
          >
            How It Works
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/benefits"
            className={`nav-link ${isActive("benefits") && "active-link"}`}
          >
            Benefits
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/faq"
            className={`nav-link ${isActive("faq") && "active-link"}`}
          >
            FAQ
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/users"
            className={`nav-link ${isActive("users") && "active-link"}`}
          >
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
