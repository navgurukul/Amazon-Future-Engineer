import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Amazon Future Engineers",
  description: "A tinkering lab for future Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
