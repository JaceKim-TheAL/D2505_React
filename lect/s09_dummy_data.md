[![My Skills](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,js,react&theme=light)](readme.md)

## S09. 더미 데이터 구현, map() 반복문	
> 개요요

### 속성값으로 컴포넌트 간 데이터 전달 : *props.속성*
- [속성값 전달1](#속성값-전달1) : 컴포넌트의 속성값 읽어오기. 
- [속성값 전달2](#속성값-전달2) : 읽어온 속성값을 state로 관리
- [속성값 전달3](#속성값-전달3) : 읽어온 속성값을 state로 관리
- [속성값 전달4](#속성값-전달4) : 컴포넌트의 속성값 변경하기.

---

### 프로젝트 생성

- npx 명령어로 프로젝트 생성
```powershell
npx create-react-app word
```
<br/>

- 기본스타일 C&P, src/index.css
```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}

ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
  color: #333;
}

.App {
  width: 800px;
  margin: 0 auto;
}

.header {
  position: relative;
}

.header .menu {
  position: absolute;
  top: 10px;
  right: 0;
}

.header .link {
  border: 1px solid #333;
  padding: 10px;
  margin-left: 10px;
  background-color: #efefef;
  font-weight: bold;
  border-radius: 4px;
}

.list_day {
  display: flex;
  flex-wrap: wrap;
}

.list_day li {
  flex: 20% 0 0;
  box-sizing: border-box;
  padding: 10px;
}

.list_day a {
  display: block;
  padding: 20px 0;
  font-weight: bold;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  background-color: dodgerblue;
}

table {
  border-collapse: collapse;
  width: 100%;
}
table td {
  width: 25%;
  height: 70px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 26px;
}

table td:first-child {
  width: 10%;
}

.off td {
  background: #eee;
  color: #ccc;
}

.btn_del {
  margin-left: 10px;
  color: #fff;
  background-color: firebrick;
}

button {
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border: 0 none;
  border-radius: 6px;
  padding: 10px 20px;
  color: #fff;
  background-color: dodgerblue;
}

.input_area {
  margin-bottom: 10px;
}

.input_area label {
  display: block;
  margin-bottom: 10px;
}

.input_area input {
  width: 400px;
  height: 40px;
  font-size: 20px;
  padding: 0 10px;
}

.input_area select {
  width: 400px;
  height: 40px;
  font-size: 20px;
}

```
---
[[TOP]](#s08-props)
<br/>

- 파일경로/파일명.js
```js

```

- localhost:3000
> setAge(age + 1); 를 주석처리

![화면](./images/s08_props_01.png)


---
[[TOP]](#s08-props)
<br/>

### 속성값 전달2
- 파일경로/파일명.js
```js

```

- localhost:3000
> setAge(age + 1); 를 주석처리

![화면](./images/s08_props_01.png)


---
[[TOP]](#s08-props)
<br/>

