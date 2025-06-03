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
