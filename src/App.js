

function App() {
  const age = 1
  return (
<>
{age > 20 ?<User name="Ali" age={20}/> : <Inputeforadd name="Reza"/>}
</>
  
  );
}
 const User = (propse)=>{
  return (<div>
    <h1>{propse.name}</h1>
    <h2>{propse.age}</h2>
  </div>
  )
}
const Inputeforadd = (propse)=>{
  return (
    <> <button>{propse.name}</button> </>
  )
}
export default App;
