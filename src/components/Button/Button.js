
function Button(props) {
    return(
        <div>
            <button onClick={props.redirecionar}> {props.nome} </button>
        </div>
    )
}

export default Button