import { useLocation, useNavigate, userLocation } from 'react-router-dom'
import Button from "../../components/Button/Button"
import Title from '../../components/Title/Title'

const Home = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { listaDeUsuarios } = location.state

    const vaParaLogin = () => {
        navigate('/')
    }

    return (
        <div>
            <Title title='Home' />

            <ul>
                {listaDeUsuarios.map((usuario) => (
                    <li key={usuario.id}> {usuario.email} </li>
                ))}
            </ul>

            <Button title='Voltar' aoClicar={vaParaLogin} />
        </div>
    )
}

export default Home