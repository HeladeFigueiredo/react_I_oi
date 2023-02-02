import Proptypes from 'prop-types'

const Title = ({title}) => {
    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}

Title.propTypes = {
    text: Proptypes.string
}

export default Title