import PropTypes from 'prop-types'

const Input = ({label, type, onChange, cor}) => {
    return(
        <div>
            <label style={{color: cor}}> {label} </label>
            <input type={type} onChange={onChange} />
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

