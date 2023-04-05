import { Link, useLoaderData } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div className="flex justify-between font-bold py-2 px-4 border-b-4 border-[#00df9a]">
        <ul>
      <h1 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.name}</h1>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.workout}</h2>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.meal}</h2>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.weight}</h2>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.notes}</h2>
      </ul>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;