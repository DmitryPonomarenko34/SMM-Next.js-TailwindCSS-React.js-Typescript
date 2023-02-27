import "../styles/globals.css";
import Header from "./Header";
import { Nunito_Sans, Unbounded, Inter } from "@next/font/google";
import Providers from "./Providers";

const nunitoSans = Nunito_Sans({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  style: ["normal"],
});

const unbounded = Unbounded({
  weight: ["600", "500"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-unbounded",
});

const inter = Inter({
  weight: ["700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} ${unbounded.variable} ${inter.variable}`}
      >
        <Providers>
          <Header />
          <main className="pt-[7.5rem]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
