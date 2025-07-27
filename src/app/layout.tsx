import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: "Dr. Vikas Jindal",
  description: "Best gastroenterologist in Delhi, NCR, Gurgaon, Noida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>
        {children}
        </LayoutClient>
      </body>
    </html>
  );
}
