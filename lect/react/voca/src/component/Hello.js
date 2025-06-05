import { useState } from "react";
import UserName from "./UserName";

export default function Hello({init_age = 10, ...props}) {
  // const init_age = props.init_age;

  // const [name, setName] = useState("로미오");
  const [name, setName] = useState(props.name);
  // const [age, setAge] = useState(props.age);
  const [age, setAge] = useState(props.age === undefined ? init_age : props.age);

  // const msg = age > 19 ? "성인입니다." : "청소년입니다.";
  
  return (
    <div>
      <h1>props (=properties) </h1>
      <center>
      <table border="1" cellPadding="5" cellSpacing="0">
        <tr>
          <td width={100}>이름</td>
          <td width={100}>나이</td>
          <td width={300}>메시지</td>
        </tr>
        <tr>
          <td><b id="name">{name === undefined ? "쥴리엣" : name}</b></td>
          <td><b id="age">{age === undefined ? init_age : age}</b></td>
          <td><b id="msg">{age > 19 ? "성인입니다." : "청소년입니다."}</b></td>
        </tr>
      </table>
      </center>

      <UserName name={name} />

      <button 
        onClick={() => {
          setName(name === "로미오" ? "쥴리엣" : "로미오");
          // setAge(age + 1); // age를 1씩 증가시킵니다.
          // setAge(props.age + 1); // props.age는 변경할 수 없으므로, 이렇게 하면 안 됩니다.

        }}
      >
        이름 바꾸기
      </button> &nbsp;
      <button 
        onClick={() => {
          setAge(age === undefined ? init_age : age + 1);

          // setAge(age + 1); // age를 1씩 증가시킵니다.
          // setAge(props.age + 1); // props.age는 변경할 수 없으므로, 이렇게 하면 안 됩니다.
        }}
      >
        나이 +1
      </button> &nbsp;
      <button 
        onClick={() => {
          setAge(age === undefined ? init_age : age - 1);
        }}
      >
        나이 -1
      </button>
    </div>
  );
}
