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
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.workout}</h2>
      <h2>{post.meal}</h2>
      <h2>{post.weight}</h2>
      <h2>{post.notes}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Create a Trax</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="name"
            placeholder="enter name here"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="workout"
            placeholder="enter workout here"
            defaultValue={post.workout}
          />
          <input
            type="text"
            name="meal"
            placeholder="enter meal here"
            defaultValue={post.meal}
          />
          <input
            type="text"
            name="weight"
            placeholder="enter weight here"
            defaultValue={post.weight}
          />
          <input
            type="text"
            name="notes"
            placeholder="enter notes here"
            defaultValue={post.notes}
          />
          <button>Update Trax</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Trax</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;