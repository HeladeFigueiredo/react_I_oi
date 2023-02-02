import PropTypes from 'prop-types'

const Input = ({label, type, setValue}) => {
    return(
        <div>
            <label> {label} </label>
            <input type={type} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
}

Input.defaultProps = {
    type: 'text',
}

export default Input

