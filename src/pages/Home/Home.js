import { useNavigate } from 'react-router-dom'
import Button from "../../components/Button/Button"

function Home() {

    const navigate = useNavigate()

    function vaParaLogin() {
        navigate('/')
    }

    return (
        <div>
            <h1> Home </h1>
            <Button nome='Voltar' redirecionar={vaParaLogin} />
        </div>
    )
}

export default Home