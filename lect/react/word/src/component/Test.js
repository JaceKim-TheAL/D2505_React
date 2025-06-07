export default function Test() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li key={number}>{number**2}</li>);
    return (
    <ul>{listItems}</ul>
    );  
}


