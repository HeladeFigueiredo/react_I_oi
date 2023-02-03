import Proptypes from 'prop-types'

const Title = ({title, fontSize, marginTop}) => {
    return(
        <div>
            <h1 style={{fontSize: fontSize, marginTop: marginTop}}>{title}</h1>
        </div>
    )
}

Title.propTypes = {
    text: Proptypes.string
}

export default Title