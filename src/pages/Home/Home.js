import { useEffect, useState } from 'react'
import { json, useLocation, useNavigate, userLocation } from 'react-router-dom'
import Button from "../../components/Button/Button"
import Title from '../../components/Title/Title'

const Home = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [loading, setLoading] = useState(true)
    const [photos, setPhotos] = useState([])

    const [contador, setContador] = useState(0)

    const { listaDeUsuarios } = location.state
    const [usuario, setUsuario] = useState('****');
    const [mostraUsuario, setMostraUsuario] = useState(true)

    const vaParaLogin = () => {
        navigate('/')
        localStorage.removeItem('usuario');
    }

    useEffect(() => {
        setUsuario(localStorage.getItem('usuario'));
        fetch ('http://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((data) => {
                setPhotos(data)
                setTimeout(() => setLoading(false), 2000)
            })
    }, [])

    const exibirUsuario = () => {
        setMostraUsuario(!mostraUsuario);
        if(mostraUsuario) {
            setUsuario(localStorage.getItem('usuario'));
        } else {
            setUsuario('****');
        }
    } 

    return (
        <div>
            <Title title={`HOME - Bem vindo: ${usuario}`} />

                <ul>
                    <h2> Lista de Usuários</h2>
                    {listaDeUsuarios.map((usuario) => (
                        <li key={usuario.id}> Email do usuário: {usuario.email} </li>
                    ))}
                </ul>

            <div>
                <Button title='Voltar' aoClicar={vaParaLogin} />
                <Button title={`${mostraUsuario ? 'Esconder' : 'Exibir'} Usuario`} aoClicar={exibirUsuario} />
            </div>

            <hr/>

            <h1> Contador: {contador} </h1>
            <Button title='Contador' aoClicar={() => setContador(contador + 1)} />

            <hr/>

            {loading ? (
                <h1> Carregando</h1>
            ) : (
                <ul>
                    <h2>Lista de Fotos</h2>
                    {photos.map((photo) => (
                        <li key={photo.id}> {photo.title} </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Home