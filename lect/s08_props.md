[![My Skills](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,js,react&theme=light)](readme.md)

## S08. props	
> React에서 Props(Properties)는 컴포넌트 간 데이터를 전달하는 방식
- **읽기 전용(Read-Only)** : Props는 변경할 수 없는 값입니다. 컴포넌트 내부에서 직접 수정할 수 없습니다.
- **부모 → 자식 데이터 전달** : 부모 컴포넌트가 값을 정의하고, 자식 컴포넌트는 이를 받아서 사용합니다.

- 속성값으로 컴포넌트 간 데이터 전달
- [속성값 전달1](#속성값-전달1) : 컴포넌트의 속성값 읽어오기. *props.속성*
- [속성값 전달2](#속성값-전달2) : 읽어온 속성값을 state로 관리
- [속성값 전달3](#속성값-전달3) : 읽어온 속성값을 state로 관리

---

### 속성값 전달1 
> Error 발생 !!!

- src/App.js
```js
import "./App.css";
import Hello from "./component/Hello";

function App() {

  return (
    <div className="App">
      <h3>props : properties</h3>
      <Hello age={10}/>
      <Hello age={20}/>
      <Hello age={30}/>
    </div>
  );
}

export default App;

```

- src/component/Hello.js
```js
import { useState } from "react";

export default function Hello(props) {
  // props.age = 100; // props는 변경할 수 없습니다. 이 코드는 무시됩니다.
  
  const [name, setName] = useState("로미오");
  const [age, setAge] = useState(props.age);
  // props.age는 변경할 수 없으므로, state로 age를 관리합니다.
  // props는 컴포넌트가 렌더링될 때 전달되는 값으로, 변경할 수 없습니다.  
  
  return (
    <div>
      <h1>props (=properties)</h1>
      <h2>이름 : 
        <b id="name">
          {name}({props.age})
        </b>
      </h2>
      <button 
        onClick={() => {
          setName(name === "로미오" ? "쥴리엣" : "로미오");
          setAge(age + 1); // age를 1씩 증가시킵니다.
          // setAge(props.age + 1); // props.age는 변경할 수 없으므로, 이렇게 하면 안 됩니다.

        }}
      >
        이름 바꾸기
      </button>
    </div>
  );
}


```

- localhost:3000
![화면](./images/s08_props_01_err.png)

```console
Hello.js:4  Uncaught TypeError: Cannot assign to read only property 'age' of object '#<Object>'
    at Hello (Hello.js:4:1)
```

- localhost:3000
> setAge(age + 1); 를 주석처리

![화면](./images/s08_props_01.png)


---
[[TOP]](#s08-props)
<br/>

### 속성값 전달2

- src/component/Hello.js
```js
import { useState } from "react";

export default function Hello({age}) {
  const [name, setName] = useState("로미오");
  // const [age, setAge] = useState(props.age);
  // props.age는 변경할 수 없으므로, state로 age를 관리합니다.
  // props는 컴포넌트가 렌더링될 때 전달되는 값으로, 변경할 수 없습니다.  

  const msg = age > 19 ? "성인입니다." : "청소년입니다.";

  
  return (
    <div>
      <h1>props (=properties) </h1>
      <h2>속성값 : 
        <b id="name">
          {name}({age}) : {msg} 
        </b>
      </h2>
      <button 
        onClick={() => {
          setName(name === "로미오" ? "쥴리엣" : "로미오");
          // setAge(age + 1); // age를 1씩 증가시킵니다.
          // setAge(props.age + 1); // props.age는 변경할 수 없으므로, 이렇게 하면 안 됩니다.

        }}
      >
        이름 바꾸기
      </button>
    </div>
  );
}

```

- localhost:3000
![화면](./images/s08_props_02.png)

---
[[TOP]](#s08-props)
<br/>

### 속성값 전달3

- src/component/UserName.js
```js
export default function UserName({name}) {
    return <p>Hello, {name}</p>
}
// 위의 Hello 컴포넌트와 동일한 기능을 하는 UserName 컴포넌트입니다.
// UserName 컴포넌트는 name이라는 prop을 받아서 "Hello, {name}"을 출력합니다.
```

- src/component/Hello.js
```js
import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}) {
  const [name, setName] = useState("로미오");
  const msg = age > 19 ? "성인입니다." : "청소년입니다.";
  
  return (
    <div>
      <h1>props (=properties) </h1>
      <h2>속성값 : 
        <b id="name">
          {name}({age}) : {msg} 
        </b>
      </h2>
      <UserName name={name} />
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

- localhost:3000
![화면](./images/s08_props_03.png)

---
[[TOP]](#s08-props)
<br/>

