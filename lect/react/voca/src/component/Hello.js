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
          // setAge(age + 1); // age를 1씩 증가시킵니다.
          // setAge(props.age + 1); // props.age는 변경할 수 없으므로, 이렇게 하면 안 됩니다.

        }}
      >
        이름 바꾸기
      </button>
    </div>
  );
}
