import { useState } from "react";

//  import {} from "./componnet"

function App() {
  const [ count , setCount ] = useState(0)
  return (<>
  <button onClick={() => {setCount(count + 1 )}}>increse</button>
  <button onClick={() => {setCount(count - 1 )}}>decrese</button>
  <button onClick={() => {setCount(0)}}>set to 0</button>
  <h1>{count}</h1>
  </>);
}

export default App;
