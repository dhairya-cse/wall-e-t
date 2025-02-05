import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wall-e-t",
  description: "A LLM based wallet UI simulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
