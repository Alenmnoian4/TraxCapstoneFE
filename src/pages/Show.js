import { Link, useLoaderData, Form } from "react-router-dom";

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

    <div class={div}>
      <h1 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.name}</h1>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.workout}</h2>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.meal}</h2>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.weight}</h2>
      <h2 className="font-bold py-2 px-4 border-b-4 border-[#00df9a]">{post.notes}</h2>
      <div style={{ textAlign: "center" }}>
        <h2 className= 'w-full text-6xl font-bold text-[#00df9a] bg-black py-2 px-4 border-b-4 border-[#00df9a]'>Trax Logs</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input className="font-bold py-2 px-4 border-b-4 border-[#00df9a]"
            type="text"
            name="name"
            placeholder="enter name here"
            defaultValue={post.name}
          />
          <input className="font-bold py-2 px-4 border-b-4 border-[#00df9a]"
            type="text"
            name="workout"
            placeholder="enter workout here"
            defaultValue={post.workout}
          />
          <input className="font-bold py-2 px-4 border-b-4 border-[#00df9a]"
            type="text"
            name="meal"
            placeholder="enter meal here"
            defaultValue={post.meal}
          />
          <input className="font-bold py-2 px-4 border-b-4 border-[#00df9a]"
            type="text"
            name="weight"
            placeholder="enter weight here"
            defaultValue={post.weight}
          />
          <input className="font-bold py-2 px-4 border-b-4 border-[#00df9a]"
            type="text"
            name="notes"
            placeholder="enter notes here"
            defaultValue={post.notes}
          />
          <button class="bg-[#1c1917] hover:bg-[#404040] text-[#00df9a] font-b font-bold py-2 px-4 border-b-4 border-[#00df9a] hover:border-[#00df9a] rounded mr-5">Update Trax</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button class="bg-[#1c1917] hover:bg-[#404040] text-[#00df9a] font-bold py-2 px-4 border-b-4 border-[#00df9a] hover:border-[#00df9a] rounded mr-5">Delete Trax</button>
        </Form>
      </div>
      <Link to="/">
        <button class="bg-[#1c1917] hover:bg-[#404040] text-[#00df9a] font-bold py-2 px-4 border-b-4 border-[#00df9a] hover:border-[#00df9a] rounded mr-5">Go Back</button>
      </Link>
    </div>
  );
};

export default Show;