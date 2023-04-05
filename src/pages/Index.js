import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const traxs = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <div class="bg-gray-600 hover:bg-[#404040] text-white font-bold py-2 px-4 border-b-4 border-[#00df9a] hover:border-[#00df9a] rounded mr-8"></div>
  <div 
  
  style={{textAlign: "center"}}>
    <h1 class="bg-[#1c1917] hover:bg-[#404040] text-[#00df9a] text-6xl text sizefont-bold py-2 px-4 border-b-4 border-[#00df9a] hover:border-[#00df9a] rounded mr-8">TraxErcise</h1>
  <Form action="/create" method="post"></Form>
  <h1 class="bg-[#1c1917] hover:bg-[#404040] text-[#00df9a] text-6xl text sizefont-bold py-2 px-4 border-b-4 border-[#00df9a] hover:border-[#00df9a] rounded mr-8">Fitness Journal</h1>
  
  <Form action="/create" method="post">
      <input className="font-bold py-2 px-4 border-b-4 outline-stone-700 border-[#00df9a]"type="text" name="name" placeholder="enter your name here"/>
      <input className="font-bold py-2 px-4 border-b-4 outline-stone-700 border-[#00df9a]"type="text" name="workout" placeholder="enter workout here"/>
      <input className="font-bold py-2 px-4 border-b-4 outline-stone-700 border-[#00df9a]"type="text" name="meal" placeholder="enter meal here"/>
      <input className="font-bold py-2 px-4 border-b-4 outline-stone-700 border-[#00df9a]"type="text" name="weight" placeholder="enter weight here"/>
      <input className="font-bold py-2 px-4 border-b-4 outline-stone-700 border-[#00df9a]"type="text" name="notes" placeholder="enter notes here"/>
      <button class="bg-[#1c1917] hover:bg-[#404040]  text-[#00df9a] font-bold py-2 px-4 border-b-4 border-[#00df9a] hover:border-[#00df9a] rounded mr-8">Create New Trax Log</button>
  </Form>
  </div>
  {traxs.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;
