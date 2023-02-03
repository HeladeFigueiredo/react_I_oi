import Proptypes from 'prop-types'

const Title = ({title, className}) => {
    return(
        <div>
            <h1 className={className}>{title}</h1>
        </div>
    )
}

Title.propTypes = {
    text: Proptypes.string
}

export default Title