import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Unbounded } from "@next/font/google";
import Link from "next/link";

const unbonced = Unbounded({
  weight: "600",
  subsets: ["latin"],
});

export default function FirstSection() {
  return (
    <section
      className={`${styles.first} bg-zinc-100 dark:bg-zinc-800 -mt-[7.5rem] pt-[7.5rem] h-screen relative overflow-y-hidden z-0`}
    >
      <div className="flex flex-col justify-center items-center h-full custom-container relative">
        <Image
          className="hidden absolute max-w-full max-h-full z-0 sm:block"
          src="/home-bg-social.png"
          width={1147}
          height={710}
          alt="decor img"
          aria-hidden
        />
        <h1
          className={`${unbonced.className} text-2xl max-w-md sm:max-w-xl text-center	mx-auto font-semibold sm:text-4xl mb-6 order-1 relative`}
        >
          Promotion in{" "}
          <span className="text-orange-400">all social networks</span> in a
          couple of clicks
          <Image
            className="hidden sm:block absolute right-0 top-0"
            width={48}
            height={48}
            src="/decor-cursor.svg"
            alt="decor cursor"
          />
        </h1>
        <p className="text-center max-w-xl mx-auto order-1 relative">
          Get subscribers, likes, reposts, views, listens and any other activity
          on your profiles social networks at the lowest prices on the market
          and in the fastest time!
        </p>
        <Link className="second-link mb-7 block order-1 relative" href="/">
          Start promoting
        </Link>
        <div className="flex mb-1 order-1 relative">
          <Image
            className="mr-1 block"
            src="/rating.svg"
            alt="rating 4.4 / 5"
            width={100}
            height={20}
          />
          <span className="font-bold">4.4 / 5</span>
        </div>
        <p className="order-1 relative">Based on 693 reviews</p>
      </div>
    </section>
  );
}
