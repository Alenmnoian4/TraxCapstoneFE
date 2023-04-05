import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.name}</h1>
      </Link>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.workout}</h2>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.meal}</h2>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.weight}</h2>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.notes}</h2>
    </div>
  );
};

export default Post