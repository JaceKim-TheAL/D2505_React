export default function Hello() {

  function showName() {
    console.log("My name is Jace");
  }

  function showAge() {
    console.log("My age is 25");
  } 

  function showText(txt) {
    console.log(txt);
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          console.log("My age is 25");
        }} 
      >
        Show age
      </button>
      <br/>
      <input 
        type="text" 
        onChange={e => {
          const txt = e.target.value;
          console.log(txt); 
        }}
      />
    </div>
  );
}
