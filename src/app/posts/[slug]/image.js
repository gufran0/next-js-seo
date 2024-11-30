
import Head from "next/head";

export default function BlogPost() {
  const canonicalUrl = "https://yourdomain.com/blog/my-post";

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <h1>My Blog Post</h1>
      <p>Content of the blog post.</p>
    </>
  );
}