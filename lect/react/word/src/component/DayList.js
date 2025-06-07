import dummy from "../db/data.json";

export default function DayList() {
    console.log("DayList");
    console.log(dummy);
    return <ul className="list_day">
        { dummy.days.map(day => (
            <li key={day.id}><a href={day.day}>Day {day.day}</a></li>
        ))}
    </ul>
}
