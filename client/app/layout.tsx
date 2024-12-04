import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stredu",
  description: "Edu Chain Stream Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
