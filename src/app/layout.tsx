import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/config/site.config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { TopNavbar } from "@/components/top-navbar";
import BottomNavbar from "@/components/bottom-navbar";
import { ScheduleCallFloat } from "@/components/cal";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next"
import SunlightBackground from "@/components/custom/sunlight-bg";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s - ${DATA.name}`,
  },
  description: DATA.description,
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  keywords: [
    "Rahul Dharamnath Shah",
    "rxuhl18",
    "mindpuzzledev",
    "Rahul Frontend Developer",
    "Rahul Fullstack Developer",
    "Rahul Web3 Developer",
    "Rahul AI ML Developer",
    "Nayan Katiyara Mumbai",
    "Nayan Katiyara Pune",
    "Nayan Katiyara React Developer",
    "Nayan Katiyara Next.js",
    "Nayan Katiyara JavaScript",
    "Nayan Katiyara TypeScript",
    "Shah Rahul",
    "Nayan Katiyara",
    "Shah rahul",
    "Nayan Katiyara Blogs",
    "Nayan Katiyara Resume",
    "Nayan Katiyara Projects",
    "Nayan Katiyara Contact",
    "Nayan Katiyara Portfolio",
    "Nayan Katiyara Instagram",
    "Nayan Katiyara Youtube",
    "Nayan Katiyara Email",
    "Nayan Katiyara LinkedIn",
    "Nayan Katiyara GitHub",
    "Nayan Katiyara Twitter",
    "Nayan Katiyara",
    "MindPuzzledev",
    "Mindpuzzledev",
    "Nayan Katiyara Developer Portfolio",
    "Nayan Katiyara Full Stack Engineer",
    "Nayan Katiyara Open Source Contributor",
    "Nayan Katiyara Indie Hacker"
  ],
  authors: [
    {
      name: `${DATA.name}`,
      url: DATA.url,
    },
  ],
  creator: `${DATA.name}`,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    images: [
      {
        url: DATA.prevImage,
      },
    ],
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.xhandle}`,
    card: "summary_large_image",
    site: DATA.url,
    creator: `${DATA.name}`,
    description: DATA.description,
    images: [
      {
        url: DATA.prevImage,
        width: 1200,
        height: 630,
        alt: `${DATA.name}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <SunlightBackground >
            <TooltipProvider delayDuration={0}>
              <div className="hidden md:block">
                <TopNavbar />
              </div>
              {children}
              <SpeedInsights />
              <div className="block md:hidden">
                <BottomNavbar />
              </div>
              {/* <ScheduleCallFloat /> */}
              <Analytics />
              <Toaster />
            </TooltipProvider>
          </SunlightBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
