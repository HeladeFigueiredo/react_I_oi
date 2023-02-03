import PropTypes from 'prop-types'

const Input = ({label, type, onChange, color, fontSize }) => {
    return(
        <div>
            <label style={{color: color, fontSize: fontSize}} > {label} </label>
            <input type={type} onChange={onChange} style={{fontSize: fontSize}}/>    
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string
}

Input.defaultProps = {
    type: 'text',
}

export default Input

