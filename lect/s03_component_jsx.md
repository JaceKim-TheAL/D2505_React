[![My Skills](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,js,react&theme=light)](readme.md)

## S03. 컴포넌트, JSX

### JSX(JavaScript XML)
> React에서 사용되는 문법으로, JavaScript 코드 안에서 HTML을 직관적으로 작성할 수 있도록 도와준다.

### JSX 특징

- **HTML과 유사한 문법** : HTML 태그처럼 보이지만, JavaScript 내에서 작성
```jsx
const element = <h1>Hello, JSX!</h1>;
```
- **JavaScript 표현식 사용 가능** : {}를 사용하여 변수를 포함할 수 있다.
```jsx
const name = "Jace";
const element = <h1>Hello, {name}!</h1>;
```
- **컴파일 과정 필요** : JSX는 브라우저가 직접 이해할 수 없으므로 Babel 같은 트랜스파일러가 JavaScript 코드로 변환해야 한다.
- **React 컴포넌트에서 자주 사용** : JSX는 React 컴포넌트에서 UI를 정의하는 데 유용하다.
```jsx
function Greeting() {
    return <h1>Welcome to React!</h1>;
}
```


<br/>

