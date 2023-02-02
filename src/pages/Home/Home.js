import { useNavigate } from 'react-router-dom'
import Button from "../../components/Button/Button"
import Title from '../../components/Title/Title'

const Home = () => {

    const navigate = useNavigate()

    const vaParaLogin = () => {
        navigate('/')
    }

    return (
        <div>
            <Title title='Home' />
            <Button title='Voltar' aoClicar={vaParaLogin} />
        </div>
    )
}

export default Home