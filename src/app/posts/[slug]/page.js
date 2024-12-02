import Image from "next/image";
import { posts } from "../../_lib/data/posts";
import Script from "next/script";
import { notFound } from "next/navigation"; // Import notFound function

const PostPage = async ({ params }) => {
  const { slug } = params; // Extract params directly
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // Trigger the custom 404 page
  }

  return (
    <div className="bg-gray-50 pb-10">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
        strategy="afterInteractive"
      />

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-12">
        <div className="px-6 sm:px-10 py-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
            {post.title}
          </h1>

          <p className="text-gray-500 text-sm text-center mb-6 italic">
            Published on {new Date(post.date).toLocaleDateString()}
          </p>

          <div
            className="prose prose-xl max-w-none text-gray-700 leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>

        <div className="border-t border-gray-200"></div>

        <div className="p-6 sm:p-8">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={800}
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
