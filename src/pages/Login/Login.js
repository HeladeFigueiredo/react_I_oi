import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import userEvent from '@testing-library/user-event';

const Login = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState('Login')
    const [showError, setShowError] = useState(false)
    const [inputColor] = useState('red')
    const [nomeDeUsuario, setNomeDeUsuario] = useState('')
    const [senha, setSenha] = useState('')


    const [usuarios] = useState([
        {
            id: 1,
            email: 'helade@gmail.com',
            password: '1234'
        },

        {
            id: 2,
            email: 'helena@gmail.com',
            password: '5678'
        },

        {
            id: 3,
            email: 'fabin@gmail.com',
            password: '4567'
        }
    ])

    const vaParaHome = () => {
        console.log(nomeDeUsuario);
        console.log(senha);

        const usuarioEscolhido = usuarios.find(usuario => usuario.email === nomeDeUsuario && usuario.password === senha )

        if (usuarioEscolhido) {
            navigate('./home', { state: { listaDeUsuarios: usuarios } })
            localStorage.setItem('usuario', nomeDeUsuario);
        } else {
            setShowError(true)
        }
    }

    const mudarTitulo = () => {
        setTitle('Sucesso do Goiás')
    }

    return (
        <div className='container'>
            <Title title={title} />

            {showError ? 
            <Subtitle subtitle='Credenciais inválidas'/> 
            : 
            <span> Ainda não digitou as credencias </span> }
            
            <Input label='Usuário' type='text' onChange={(e) => setNomeDeUsuario(e.target.value)} color={showError ? inputColor : null}/>
            <Input label='Senha' type='password' onChange={(e) => setSenha(e.target.value)} color={showError ? inputColor : null}/>

            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.email}> {usuario.email} </li>
                ))}
            </ul>

            <Button title='Entrar' aoClicar={vaParaHome} bgColor='#ff6f9c'/>
            <Button title='Trocar título' aoClicar={mudarTitulo} />
            <Link href='https://www.youtube.com/'/>
        </div>
    );
}

export default Login