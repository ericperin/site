import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Perin",
  description: "Software Engineer",
};

const font = Montserrat({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
