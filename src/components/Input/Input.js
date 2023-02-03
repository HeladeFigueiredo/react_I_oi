import PropTypes from 'prop-types'

const Input = ({label, type, onChange, color}) => {
    return(
        <div>
            <label style={{color: color}} > {label} </label>
            <input type={type} onChange={onChange} />
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

