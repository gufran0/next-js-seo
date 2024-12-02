export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-4">Sorry, the page you are looking for does not exist.</p>
        <a
          href="/"
          className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Go Back Home
        </a>
      </div>
    );
  }
  