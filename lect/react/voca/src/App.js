import "./App.css";

function App() {

  const name = "React";
  const naver = {
    name: "네이버",
    url: "https://www.naver.com"
  }

  return (
    <div className="App">
      <h1
        style={{
          color: "#EE0000",
          backgroundColor: "lightgreen",
          padding: "20px",
          borderRadius: "10px",
          fontSize: "24px",
          textAlign: "center",
          marginTop: "20px"
        }}>
        Hello, {name} !!!  
      </h1>
      <a href={naver.url}>
        {naver.name}
      </a>
    </div>
  );
}

export default App;
// This code defines a simple React component that displays a greeting message and a link to Naver's website with its logo. The styles are applied inline for demonstration purposes.
// The component uses a functional component structure and returns JSX to render the content. The `name` and `naver` objects are defined within the component, showcasing how to use variables in JSX.
// The `App` component is exported as the default export, allowing it to be imported and used in other parts of the application, such as in the `index.js` file where it is rendered into the DOM.


