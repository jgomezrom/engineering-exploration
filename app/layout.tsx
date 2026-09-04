import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import NavBar from "./components/NavBar"; import Footer from "./components/Footer";
import { AgeBandProvider } from "./context/AgeBandContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const SITE_URL = "https://engineering-exploration-two.vercel.app";
const SITE_NAME = "Engineering Exploration";
const SITE_DESCRIPTION =
  "An honest, no-hype guide to what engineers actually do — explore engineering fields, take an interest quiz, and try hands-on challenges.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  verification: {
    google: "9hf73QJvPc-pHtT7C8brIVL1Nm1KtUQlPfSAXCsR_SY",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Applies a saved dark/light choice before first paint, so there's
            no flash — see app/context/ThemeContext.tsx and
            https://nextjs.org/docs/app/guides/preventing-flash-before-hydration.
            No saved choice means no class is added here, leaving the
            prefers-color-scheme media query in globals.css to decide. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ee-theme");if(t==="dark"||t==="light")document.documentElement.classList.add(t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <AgeBandProvider>
              <NavBar />
              {children}
              <Footer />
            </AgeBandProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
