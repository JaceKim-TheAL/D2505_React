import dummy from "../db/data.json";
import { useState } from "react";

export default function Day(props) {
    // dummy.word 
    // const day = 1; // 예시로 1일차 단어를 표시
    // const day = props.day || 1; // props로 전달된 day가 없으면 기본값 1을 사용
    const [day, setDay] = useState(props.day || 1); // props로 전달된 day가 없으면 기본값 1을 사용
    const wordList = dummy.words.filter((word) => word.day === day);
    if (wordList.length === 0) {
      return <p>해당 날짜에 단어가 없습니다.</p>;
    }
    console.log("Day "+day);
    console.log(wordList);
    // 단어 목록을 테이블로 표시
    return (<>
      <table>
        <thead>
          <tr bgcolor="#E0E0E0" border="1">
            <td>day idx</td>
            <td>eng</td>
            <td>kor</td>
          </tr> 
        </thead>
        <tbody>
        {wordList.map((word) => (
          <tr key={word.id}>
            <td>D{word.day} - {word.id}</td>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
          </tr>
        ))}
        </tbody>
      </table>
      </>
    );
}
