
function Input(props) {
    return(
        <div>
            <label for='input'> {props.label} </label>
            <input name='input' type={props.type}/>
        </div>
    )
}

export default Input