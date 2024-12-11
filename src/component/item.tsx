/*Using Destructuring*/
/*export default function  Item({title, desc} : {title: string,desc: string}) {
    return (
        <>
            <h2>{title}</h2>
            <p>{desc}</p>
        </>
    )
}*/

/*Using Props(properties)*/
export default function  Item(props: {title: string, desc: string}) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </>
    )
}
