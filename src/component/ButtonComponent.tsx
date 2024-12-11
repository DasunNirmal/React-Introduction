/*
export default function ButtonComponent(props: {children: React.ReactNode}) {
    return (
        <>
            <button>{props.children}</button>
        </>
    )
}*/
/*
export default function ButtonComponent(props) {
    const name = props.name;
    return (
        <>
            <button onClick={() => {props.onClick(name)}}>{props.name}</button>
        </>
    )
}*/
/*
import {useState} from "react";

export default function ButtonComponent(props) {
    const [count, setCount] = useState(0);
    return (
        <>
            {props.name == 'Add 1' ?
                <button onClick={() => setCount(count + 1)}>count: {count}</button>
                :
                <button onClick={() => setCount(count - 1)}>count: {count}</button>
            }
        </>
    )
}*/
