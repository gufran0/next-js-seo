// components/PostCard.jsx
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <li
      key={post.id}
      className="border border-gray-300 rounded-lg overflow-hidden"
    >
      <Link href={`/posts/${post.slug}`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {post.title}
          </h2>
          <p className="text-gray-500">{post.date}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
