import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';

const Login = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState('Login')
    const [showError, setShowError] = useState(false)

    const [inputColor, setInputColor] = useState('red')

    const [nomeDeUsuario, setNomeDeUsuario] = useState('')
    const [senha, setSenha] = useState('')


    const [usuarios, setUsuarios] = useState([
        {
            email: 'helade@gmail.com',
            password: '1234'
        },

        {
            email: 'helena@gmail.com',
            password: '5678'
        }
    ])

    const vaParaHome = () => {
        console.log(nomeDeUsuario);
        console.log(senha);

        const usuarioEscolhido = usuarios.find(usuario => usuario.email === nomeDeUsuario && usuario.password === senha )

        if (usuarioEscolhido) {
            navigate('./home')
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
            <Subtitle subtitle='Ainda não digitou as credenciais'/> }
            
            <Input label='Usuário' type='text' onChange={(e) => setNomeDeUsuario(e.target.value)} cor={showError ? inputColor : null}/>
            <Input label='Senha' type='password' onChange={(e) => setSenha(e.target.value)} cor={showError ? inputColor : null}/>

            <Button title='Entrar' aoClicar={vaParaHome} bgColor='#ff6f9c'/>
            <Button title='Trocar título' aoClicar={mudarTitulo} />
            <Link href='https://www.youtube.com/'/>
        </div>
    );
}

export default Login