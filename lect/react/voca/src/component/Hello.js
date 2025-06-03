export default function Hello() {

  function showName() {
    console.log("My name is Jace");
  }

  function showAge() {
    console.log("My age is 25");
  } 

  function showText(e) {
    console.log(e.target.value);
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
      <input type="text" onChange={showText} />
    </div>
  );
}
