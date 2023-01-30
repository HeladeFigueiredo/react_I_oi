
const Button = ({redirecionar, nome}) => {
    return(
        <div>
            <button onClick={redirecionar}> {nome} </button>
        </div>
    )
}

export default Button