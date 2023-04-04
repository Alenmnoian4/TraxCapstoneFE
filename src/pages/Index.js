import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const traxs = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center"}}>
  <h2>Create a Trax Log</h2>
  <Form action="/create" method="post">
      <input type="text" name="name" placeholder="enter your name here"/>
      <input type="text" name="workout" placeholder="enter workout here"/>
      <input type="text" name="meal" placeholder="enter meal here"/>
      <input type="text" name="weight" placeholder="enter weight here"/>
      <input type="text" name="notes" placeholder="enter notes here"/>
      <button>Create New Trax Log</button>
  </Form>
  </div>
  {traxs.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;