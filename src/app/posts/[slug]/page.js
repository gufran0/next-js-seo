import Image from "next/image";
import { posts } from "../../_lib/data/posts";
import parse from "html-react-parser";

export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The post you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: `Read this blog post: ${post.title}. Published on ${new Date(
      post.date
    ).toLocaleDateString()}.`,
  };
}

// Generate static paths for dynamic routes
export const generateStaticParams = () => {
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = ({ params }) => {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div className="text-center text-gray-600">Post not found</div>;
  }

  return (
    <div className="bg-gray-50 pb-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-12">
        <div className="px-6 sm:px-10 py-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
            {post.title}
          </h1>

          <p className="text-gray-500 text-sm text-center mb-6 italic">
            Published on {new Date(post.date).toLocaleDateString()}
          </p>

          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed mb-8">
            {parse(post.content)}
          </div>
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
