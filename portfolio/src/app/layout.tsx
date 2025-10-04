import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "S.K. Manoj | AI Engineer & Data Scientist",
  description: "Personal portfolio of S.K. Manoj - showcasing projects, experience, and expertise in AI, Machine Learning, and Data Science.",
  keywords: ["AI Engineer", "Data Scientist", "Machine Learning", "NLP", "Cloud Computing", "Portfolio"],
  authors: [{ name: "S.K. Manoj" }],
  openGraph: {
    title: "S.K. Manoj | AI Engineer & Data Scientist",
    description: "Building intelligent systems, scalable applications, and data-driven solutions.",
    type: "website",
    url: "https://skmanoj.vercel.app",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.K. Manoj | AI Engineer & Data Scientist",
    description: "Building intelligent systems, scalable applications, and data-driven solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
