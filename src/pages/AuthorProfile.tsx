import { Link, useParams } from "react-router-dom";

const AuthorProfile = () => {
  const { name } = useParams();
  
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-xl font-bold">{decodeURIComponent(name || "")}</h1>
      <p className="text-gray-600 mt-2">This is a minimal author profile page</p>
      <Link to="/" className="text-blue-600 text-sm hover:underline">
        Back to Post
      </Link>
    </div>
  );
};

export default AuthorProfile;