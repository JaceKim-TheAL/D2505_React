[![My Skills](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,js,react&theme=light)](readme.md)

## 기본 명령어
| Command   | Description | 
|:----------|:------------|
| npx create-react-app `프로젝트명` | 새 React 프로젝트를 생성 |
| npm install   | `package.json`에 정의된 모든 패키지를 설치 |
| npm start     | 개발 모드에서 프로젝트를 실행, 기본적으로 `localhost:3000`에서 확인 |
| npm run build |  배포 가능한 상태로 정리된 파일을 `build` 폴더에 생성 |
| npm test      | 프로젝트 내 정의된 테스트를 실행 |
| npm uninstall `패키지명` | 설치된 패키지를 제거 |
| npm run `스크립트명`     | `package.json`에 정의된 스크립트를 실행할 때 사용 |
<br/>

---

## Tips


**[Tip] React에서 논리연산자** 
1. 같다 (Equality)
- == : 느슨한 비교 (값만 비교, 타입 변환 가능)
- === : 엄격한 비교 (값과 타입 모두 비교)
```jsx
const a = "5";
const b = 5;

console.log(a == b);  // true (타입 변환 후 비교)
console.log(a === b); // false (타입이 다름)
```
2. 같지 않다 (Inequality)
- != : 느슨한 비교 (값만 비교, 타입 변환 가능)
- !== : 엄격한 비교 (값과 타입 모두 비교)
```jsx
const x = "10";
const y = 10;

console.log(x != y);  // false (타입 변환 후 비교)
console.log(x !== y); // true (타입이 다름)
```
3. 활용예시
- React에서 조건부 렌더링을 할 때 논리 연산자를 사용할 수 있다.
```jsx
function Example({ value }) {
  return (
    <div>
      {value === 10 ? <p>값이 10입니다.</p> : <p>값이 10이 아닙니다.</p>}
    </div>
  );
}
```
- 또는 `&&` 연산자를 활용하여 특정 조건이 참일 때만 렌더링할 수도 있습니다.
```jsx
function Example({ value }) {
  return (
    <div>
      {value !== 10 && <p>값이 10이 아닙니다.</p>}
    </div>
  );
}
```
※ 참조 : [React 공식 문서](https://ko.react.dev/learn/conditional-rendering)

---


**[Tip] React에서 { }(중괄호)** 
1. 변수 출력
- JSX 내부에서 변수를 사용할 때 {}를 사용한다.
```jsx
const name = "Jace";
return <h1>{name}님, 환영합니다!</h1>;
```
 → 화면에 "Jace님, 환영합니다!" 출력

2. 연산 및 함수 호출
- {} 내부에서 연산을 수행하거나 함수를 호출할 수 있다.
```jsx
const age = 25;
return <p>내년에는 {age + 1}살이 됩니다.</p>;
```

3. → `isLoggedIn` 이 `true`면 "로그인 성공!", `false`면 "로그인 필요" 출력

4. 배열 및 객체 사용
- {}를 사용하여 배열을 매핑하거나 객체 속성을 출력할 수 있다.
```jsx
const users = ["Alice", "Bob", "Charlie"];
return (
  <ul>
    {users.map((user) => (
      <li key={user}>{user}</li>
    ))}
  </ul>
);
```
→ 리스트 형태로 Alice, Bob, Charlie 출력

5. 인라인 스타일 적용
- React에서는 `스타일`을 객체 형태로 작성해야 하므로 `{}를 두 번 사용`한다.
```jsx
const style = { color: "blue", fontSize: "20px" };
return <p style={style}>파란색 텍스트</p>;
```
→ 파란색 텍스트 출력


※ 참조 : [React { }의 사용](https://velog.io/@chaerin00/React-%EC%9D%98-%EC%9D%98%EB%AF%B8)

---


