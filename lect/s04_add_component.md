[![My Skills](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,js,react&theme=light)](readme.md)

## S04. 컴포넌트 추가

- src/App.js
```js
import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

function App() {

  return (
    <div className="App">
      <Hello/>
      <Welcome name="React" />
    </div>
  );
}

export default App;
```

- src/component/Hello.js
```js
import World from "./World";

export default function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <World />
    </div>
  );
}

```

- src/component/Welcome.js
```js
export default function Welcome() {
  return <h1>Welcome</h1>;
}

```

- src/component/World.js
```js
export default function World() {
  return <h1>World</h1>;
}

```

- localhost:3000
![화면](./images/s04_add_component.png)

---
[[TOP]](#s03-컴포넌트-jsxjavascript-xml)
<br/>

- 컴포넌트 구조
![구조](./images/s04_component_01.png)

![구조](./images/s04_component_02.png)

---
[[TOP]](#s04-컴포넌트-추가)
<br/>

