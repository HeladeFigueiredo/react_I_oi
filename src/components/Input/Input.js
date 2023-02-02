import PropTypes from 'prop-types'
import { useState } from 'react'

const Input = ({label, type}) => {
    return(
        <div>
            <label> {label} </label>
            <input type={type}/>
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

// Adicione uma label na tela de login e altere pelo valor digitado no input usuário - vídeo no YT 
// onChange

// componente Subtitle <h2></h2>
// usa o useState
// recebe o valor igual o Title mas com o .value do input
