[![My Skills](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,js,react&theme=light)](readme.md)

## S07. state, useState
- [상태값 변경1](#상태값-변경1) : 버튼 클릭시 컴포넌트 속성값 변경 콘솔에 출력
- [상태값 변경2](#상태값-변경2) : 버튼 클릭시 DOM을 조작하여 변경된 값을 반영
- [상태값 변경3](#상태값-변경3) : 버튼 클릭시 useState를 활용하여 상태값을 직접 변경 
- [상태값 변경4](#상태값-변경4) : 최종적으로 상태값 변경 구현

---

### 상태값 변경1

- src/App.js
```js
import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import styles from "./App.module.css";

function App() {

  return (
    <div className="App">
      <Hello/>
    </div>
  );
}

export default App;

```

- src/component/Hello.js
```js
export default function Hello() {
  let name = "로미오";

  function changeName() {
    name = name === "로미오" ? "쥴리엣" : "로미오";
    console.log(name);  // 상태가 변경되었지만, React는 이 변경을 감지하지 못합니다.
  }

  return (
    <div>
      <h1>state</h1>
      <h2>컴포넌트의 속성값</h2>
      <h2>이름 : {name}</h2>
      <button onClick={changeName}>이름 바꾸기</button>
    </div>
  );
}

```

- localhost:3000
![화면](./images/s07_state_01.png)

---
[[TOP]](#s07-state-usestate)
<br/>

### 상태값 변경2

- src/component/Hello.js
```js
export default function Hello() {
  let name = "로미오";

  function changeName() {
    name = name === "로미오" ? "쥴리엣" : "로미오";
    console.log(name);  // 상태가 변경되었지만, React는 이 변경을 감지하지 못합니다.
    document.getElementById("name").innerText = name; // 직접 DOM을 조작하여 변경된 값을 반영합니다.
    // React에서는 상태 변경을 감지하지 못하기 때문에, 직접 DOM을 조작하는 것은 권장되지 않습니다.
    // React에서는 상태를 변경할 때, setState 또는 useState 훅을 사용해야 합니다.
  }

  return (
    <div>
      <h1>state</h1>
      <h2>컴포넌트의 속성값</h2>
      <h2>이름 : <b id="name">{name}</b></h2>
      <button onClick={changeName}>이름 바꾸기</button>
    </div>
  );
}

```

- localhost:3000
![화면](./images/s07_state_02.png)

---
[[TOP]](#s07-state-usestate)
<br/>

### 상태값 변경3

- src/component/Hello.js
```js
import { useState } from "react";
// 컴포넌트의 상태를 관리하기 위해 useState 훅을 사용합니다.
// useState 훅은 컴포넌트의 상태를 선언하고, 상태가 변경될 때 컴포넌트를 다시 렌더링합니다.
// useState 훅을 사용하지 않고, 직접 변수로 상태를 관리하는 것은 React의 상태 관리 방식을 따르지 않기 때문에, 
// React의 장점을 활용하지 못합니다.

export default function Hello() {
  // let name = "로미오";
  let [name, setName] = useState("로미오");

  function changeName() {
    name = name === "로미오" ? "쥴리엣" : "로미오";
    // document.getElementById("name").innerText = name; 
    setName(name); // useState 훅을 사용하여 상태를 변경합니다.
  }

  return (
    <div>
      <h1>state, useState</h1>
      <h2>이름 : <b id="name">{name}</b></h2>
      <button onClick={changeName}>이름 바꾸기</button>
    </div>
  );
}

```

- localhost:3000
![화면](./images/s07_state_03.png)

---
[[TOP]](#s07-state-usestate)
<br/>

### 상태값 변경4

- src/component/Hello.js
```js
import { useState } from "react";
// 컴포넌트의 상태를 관리하기 위해 useState 훅을 사용합니다.
// useState 훅은 컴포넌트의 상태를 선언하고, 상태가 변경될 때 컴포넌트를 다시 렌더링합니다.
// useState 훅을 사용하지 않고, 직접 변수로 상태를 관리하는 것은 React의 상태 관리 방식을 따르지 않기 때문에, 
// React의 장점을 활용하지 못합니다.

export default function Hello() {
  // let name = "로미오";
  const [name, setName] = useState("로미오");

  // function changeName() {
  //   name = name === "로미오" ? "쥴리엣" : "로미오";
  //   // document.getElementById("name").innerText = name; 
  //   setName(name); // useState 훅을 사용하여 상태를 변경합니다.
  // }

  return (
    <div>
      <h1>state, useState</h1>
      <h2>이름 : <b id="name">{name}</b></h2>
      <button 
        onClick={() => {
          setName(name === "로미오" ? "쥴리엣" : "로미오");
        }}
      >
        이름 바꾸기
      </button>
    </div>
  );
}

```

- src/App.js
```js
import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import styles from "./App.module.css";

function App() {

  return (
    <div className="App">
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  );
}

export default App;

```

- localhost:3000
![화면](./images/s07_state_04.png)

---
[[TOP]](#s07-state-usestate)
<br/>

