export function Listicle(props) {
    return <div className={"py-3"}>
        <h2 className="text-2xl font-bold my-3">{props.title}</h2>
        <ul className={"flex flex-col gap-3 p-4"}>
            {props.responsibilities.map((item, index) => {
                return <li key={index} className="text-gray-500 list-disc list-outside">{item}</li>
            })}
        </ul>
    </div>;
}
