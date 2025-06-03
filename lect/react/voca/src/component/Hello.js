import { useState } from "react";
// 컴포넌트의 상태를 관리하기 위해 useState 훅을 사용합니다.
// useState 훅은 컴포넌트의 상태를 선언하고, 상태가 변경될 때 컴포넌트를 다시 렌더링합니다.
// useState 훅을 사용하지 않고, 직접 변수로 상태를 관리하는 것은 React의 상태 관리 방식을 따르지 않기 때문에, 
// React의 장점을 활용하지 못합니다.

export default function Hello() {
  // let name = "로미오";
  const [name, setName] = useState("로미오");

  // function changeName() {
  //   const newName = name === "로미오" ? "쥴리엣" : "로미오";
  //   // document.getElementById("name").innerText = name; 
  //   setName(newName); // useState 훅을 사용하여 상태를 변경합니다.
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
