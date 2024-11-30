import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // The base URL of your website (used to resolve absolute URLs)
  metadataBase: new URL("https://yourdomain.com"),

  // The main title of your page, optimized for search engines (max ~60 characters)
  title: "Mastering Next.js Metadata: Boost SEO & Enhance Social Sharing",

  // A concise and engaging description of your page content (max ~160 characters)
  description:
    "Learn how to effectively use metadata in Next.js to improve SEO rankings and create compelling social media previews for your website.",

  // Open Graph metadata for social platforms like Facebook and LinkedIn
  openGraph: {
    title: "Mastering Next.js Metadata for SEO & Social Media Success",
    description:
      "Unlock the full potential of Next.js metadata to enhance your website’s SEO and social media presence.",
    url: "https://yourdomain.com/nextjs-metadata-guide",
    images: [
      {
        url: "https://yourdomain.com/images/nextjs-metadata-guide.png",
        alt: "Illustration of Next.js Metadata Usage",
      },
    ],
  },

  // Twitter Card metadata for sharing on Twitter
  twitter: {
    card: "summary_large_image",
    title: "Mastering Next.js Metadata: Boost SEO & Social Sharing",
    description:
      "Discover how to use Next.js metadata to improve SEO and create engaging social media previews.",
    images: ["https://yourdomain.com/images/nextjs-metadata-guide.png"],
    creator: "@YourTwitterHandle",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
