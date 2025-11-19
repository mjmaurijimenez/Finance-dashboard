import type { Metadata } from "next";
import { Noto_Sans_Display} from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css";

const noto = Noto_Sans_Display({subsets: ["latin"]});


export const metadata: Metadata = {
  title: "Finance Dashboard",
  description: "Practice Proyect for a finance dashboard using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="es">  
      <body className={noto.className}>{children}</body>
    </html>
    </ClerkProvider>
  ) 
};
    
