[![My Skills](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,js,react&theme=light)](readme.md)

## S10. 라우터 구현 react-router-dom
> 개요

### 페이지내 이동
- [실습1](#실습1) : 실습코드1
- [실습2](#실습2) : 실습코드2

---

### react-router-dom 패키지 설치

```powershell
npm install react-router-dom
``` 

- Teminal에서 Package 설치
```powershell
PS C:\GitHub\D2505_React\lect\react\word> npm install react-router-dom

added 4 packages, and audited 1346 packages in 3s

269 packages are looking for funding
  run `npm fund` for details

9 vulnerabilities (3 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\GitHub\D2505_React\lect\react\word> 
```

- **취약점(vulnerabilities)** 발생한 경우

##### [방법1] 다운그레이드 설치
> `react-router-dom`을 v5로 다운그레이드

```
npm install react-router-dom@5
```

##### [방법2] 취약점 강제 수정
> - 만약 패키지를 설치하다가 **취약점(vulnerabilities)** 이 발견되면 아래와 같이 하라고 권고메시지지
> - `npm audit fix` : 자동으로 해결 가능한 취약점을 수정
> - `npm aucit` : 상세 정보 확인 (수정되지 않은 취약점이 있는 경우)

> - But 그냥 무시!!
> - 강제로 fix 한 경우, 서버구동에 문제 발생!!!

```powershell
PS C:\GitHub\D2505_React\lect\react\word> npm audit fix --force
npm warn using --force Recommended protections disabled.
npm warn audit Updating react-scripts to 0.0.0, which is a SemVer major change.

removed 1302 packages, changed 1 package, and audited 44 packages in 5s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\GitHub\D2505_React\lect\react\word> npm audit
found 0 vulnerabilities
PS C:\GitHub\D2505_React\lect\react\word>

```


---

- 서버 구동
```powershell

```
PS C:\GitHub\practice\react\voca> npm start

> voca@0.1.0 start
> react-scripts start

(node:3276) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:3276) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
Starting the development server...
Compiled with warnings.

[eslint]
src\App.js
  Line 4:27:  'Router' is defined but never used  no-unused-vars
  Line 4:35:  'Route' is defined but never used   no-unused-vars
  Line 4:42:  'Switch' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in [eslint]
src\App.js
  Line 4:27:  'Router' is defined but never used  no-unused-vars
  Line 4:35:  'Route' is defined but never used   no-unused-vars
  Line 4:42:  'Switch' is defined but never used  no-unused-vars

webpack compiled with 1 warning


---

- App.js
```js
import Header from "./component/Header";
import DayList from "./component/DayList"; 
import Day from "./component/Day";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header /> 
      <DayList />
      <Day />
    </div>
  );
}

export default App;

```

- localhost:3000
![화면](./images/s08_props_01.png)


---
[[TOP]](#s99-문서포맷
<br/>

### 실습2
- 파일경로/파일명.js
```js

```

- localhost:3000
![화면](./images/s08_props_01.png)


---
[[TOP]](#s99-문서포맷
<br/>

