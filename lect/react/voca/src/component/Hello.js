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
