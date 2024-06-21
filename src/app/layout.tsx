import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/_components/NavBar";
import Footer from "./_components/Footer";

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
    <html lang="en" className="bg-beige">
      <body className="flex flex-col min-h-screen bg-beige">
        <NavBar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
