export default function Input(props) {
    return (
        <p className="input">
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} name={props.id} required {...props}/>
        </p>
    );
}