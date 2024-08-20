import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
// import Navbar from "./ui/Navbar.tsx";
import Navbar from "./ui/Navbar.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-slate-800 bg-cyan-500 min-h-screen`}
      >
        <Providers>
          <Navbar />
          <main className="">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
