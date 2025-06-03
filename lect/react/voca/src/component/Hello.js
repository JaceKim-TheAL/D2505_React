export default function Hello() {

  function showName() {
    console.log("My name is Jace");
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
    </div>
  );
}
