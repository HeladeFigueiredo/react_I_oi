
function Input({label, type}) {
    return(
        <div>
            <label for='input'> {label} </label>
            <input name='input' type={type}/>
        </div>
    )
}

export default Input