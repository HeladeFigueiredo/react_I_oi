import PropTypes from 'prop-types'

const Subtitle = ({subtitle}) => {
    return(
        <div>
            <h2> {subtitle} </h2>
        </div>
    )
}

Subtitle.propTypes = {
    subtitle: PropTypes.string,
}


export default Subtitle