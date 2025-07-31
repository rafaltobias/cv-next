import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafał Adamczyk - Python Developer & Student Informatyki",
  description: "Portfolio Rafała Adamczyka - student informatyki z Wrocławia specjalizujący się w React, Node.js, Python i systemach internetowych. Dostępny dla nowych projektów.",
  keywords: ["Rafał Adamczyk", "Python developer", "React", "Node.js", "student informatyki", "Wrocław", "portfolio"],
  authors: [{ name: "Rafał Adamczyk" }],
  openGraph: {
    title: "Rafał Adamczyk - Python Developer & Student Informatyki",
    description: "Student informatyki z pasją do tworzenia nowoczesnych aplikacji internetowych.",
    type: "website",
    locale: "pl_PL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
