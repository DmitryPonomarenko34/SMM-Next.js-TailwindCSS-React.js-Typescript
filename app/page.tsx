import Link from "next/link";
import FirtsSection from "./FirstSection";

export default function HomePage() {
  return (
    <>
      <FirtsSection />
      <Link href="/">Services</Link>
      <Link href="/services">Services</Link>
    </>
  );
}
