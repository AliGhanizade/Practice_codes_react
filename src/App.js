
function App() {
  const classes = [
    { name: "html", finished: true },
    { name: "Java script", finished: true },
    { name: "css", finished: false },
    { name: "C#", finished: true },
    { name: "Php", finished: false },
  ];
  return (
  <>
  {classes.map ((c , index)=>{

return  <Showclass key={index} name={c.name} finished={c.finished} />
  }
)}
  </>);
}
// const User = (propse) => {
//   return (
//     <div>
//       <h1>{propse.name}</h1>
//       <h2>{propse.age}</h2>
//     </div>
//   );
// };
// const Inputeforadd = (propse) => {
//   return (
//     <>
//       {" "}
//       <button>{propse.name}</button>{" "}
//     </>
//   );
// };

const Showclass = (props) => {
  if (props.finished === true) {
    return <h2>{props.name}</h2>;
  }
};
export default App;
