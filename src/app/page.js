// app/page.jsx

import PostCard from "./components/PostCard"; // Import PostCard component
import { posts } from "./_lib/data/posts"; // Import posts data

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">My Blog</h1>
      {/* Use grid layout with 3 columns */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
