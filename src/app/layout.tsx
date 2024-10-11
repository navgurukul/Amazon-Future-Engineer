import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Amazon Future Engineers",
  description: "A tinkering lab for future Engineer",
  icons: {
    icon:"/assets/favicon-32x32.png",
    apple:"/assets/apple-touch-icon.png",
    shortcut:"/assets/favicon-16x16.png",
  },

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
