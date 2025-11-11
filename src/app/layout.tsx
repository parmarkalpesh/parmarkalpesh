// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

const fontHeadline = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-headline",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kalpesh Parmar | Full-Stack Developer",
  description: "Showcasing my skills in React, Next.js, Node.js, and more.",
  icons: {
    icon: "/icon.png", 
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Next.js",
    "React",
    "MERN STACK",
    "Frontend Developer",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "Kalpesh Parmar | Full-Stack Developer",
    description: "A modern developer portfolio built with Next.js and TypeScript.",
    url: "https://kalpeshparmar.me/",
    siteName: "Kalpesh Parmar Portfolio",
    images: [
      {
        url: "https://kalpeshparmar.me/Kalpesh_Image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalpesh Parmar | Full-Stack Developer",
    description: "A modern developer portfolio built with Next.js",
    images: ["https://kalpeshparmar.me/Kalpesh_Image.jpg"],
    creator: "@ParmarKalp1205",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kalpesh Parmar",
  url: "https://kalpeshparmar.me",
  sameAs: [
    "https://linkedin.com/in/parmar-kalpesh",
    "https://github.com/parmarkalpesh",
  ],
  jobTitle: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* third-party analytics (optional) */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="0aDrqNMEwmJ0ADL4ZB2cMA"
          async
        ></script>

        {/* Structured data placed inside head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={cn(
          "font-body antialiased",
          fontHeadline.variable,
          fontBody.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
