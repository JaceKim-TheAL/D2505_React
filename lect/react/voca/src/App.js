import "./App.css";
import Hello from "./component/Hello";

function App() {

  return (
    <div className="App">
      <h3>props : properties</h3>
      <Hello init_age={18}/>
    </div>
  );
}

export default App;
