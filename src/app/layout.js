import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head for metadata
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://yourdomain.com",
    name: "Mastering Next.js Metadata",
    description:
      "Learn how to effectively use metadata in Next.js to improve SEO rankings and create compelling social media previews.",
    publisher: {
      "@type": "Organization",
      name: "Your Organization Name",
    },
  };

  return (
    <html lang="en">
      <Head>
        {/* Meta tag for robots */}
        <meta name="robots" content="index, follow" />
        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Title and description for SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph metadata */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        {/* Twitter metadata */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
