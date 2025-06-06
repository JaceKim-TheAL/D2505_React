import DayList from "./DayList";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <a href="/">토익 영단어(공급)</a>
      </h1>
      <DayList />
    </div>
  );
}