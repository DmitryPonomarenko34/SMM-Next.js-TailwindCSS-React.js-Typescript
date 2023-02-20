import "../styles/globals.css";
import Header from "./Header";
import { Nunito_Sans } from "@next/font/google";
import Providers from "./Providers";

const nunitoSans = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={nunitoSans.className}>
        <Providers>
          <Header />
          <main className={`custom-container mx-auto px-3 text-zinc-900`}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
