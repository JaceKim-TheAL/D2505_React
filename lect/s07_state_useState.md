[![My Skills](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,js,react&theme=light)](readme.md)

## S07. state, useState
- [버턴 클릭 이벤트](#버턴-클릭-이벤트) : `Show name`, `Show age` 버튼클릭시 콘솔 로그에 출력
- [입력 이벤트1](#입력-이벤트1) : Input 입력창에 text 입력시 콘솔 로그에 출력
- [입력 이벤트2](#입력-이벤트2) : Input 입력창에 text 입력시 콘솔 로그에 출력

---

### 상태값 변경

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

