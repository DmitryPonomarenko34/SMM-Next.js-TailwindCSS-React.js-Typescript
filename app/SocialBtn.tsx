"use client";

import { Social } from "@/constants";
import Image from "next/image";

type Props = {
  social: Social;
  isActive: boolean;
};

export default function SocialBtn({ social, isActive }: Props) {
  return (
    <button
      className={`${
        isActive && "border-orange-400 pointer-events-none text-orange-400"
      } py-3 px-4 sm:px-11 w-full bg-zinc-100 dark:bg-zinc-800 rounded-2xl border-2 flex justify-center items-center`}
    >
      <Image
        src={social.iconPath}
        alt={`${social.name} icon`}
        className="mr-3 sm:mr-5"
        width={32}
        height={32}
      />
      <span>{social.name}</span>
    </button>
  );
}
