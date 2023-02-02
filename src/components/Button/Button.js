import PropTypes from 'prop-types'

const Button = ({aoClicar, title, bgColor, color}) => {
    return(
        <div>
            <button onClick={aoClicar} style={{backgroundColor: bgColor, color}} > {title} </button>
        </div>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    aoClicar: PropTypes.func.isRequired,
    bgColor: PropTypes.string,
    color: PropTypes.string,
}

Button.defaultProps = {
    bgColor: '#c0c0c0',
    color: '#111111'
}

export default Button