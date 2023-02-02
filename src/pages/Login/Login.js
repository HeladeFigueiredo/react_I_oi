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
    const [value, setValue] = useState()

    console.log(value);

    const vaParaHome = () => {
        navigate('./home')
    }

    const mudarTitulo = () => {
        setTitle('Sucesso do Goiás')
    }

    return (
        <div className='container'>
            <Title title={title} />
            <Subtitle subtitle={value}/>
            <Input label='Usuário' type='text' setValue={setValue}/>
            <Input label='Senha' type='password'/>
            <Button title='Entrar' aoClicar={vaParaHome} bgColor='#ff6f9c'/>
            <Button title='Trocar título' aoClicar={mudarTitulo} />
            <Link href='https://www.youtube.com/'/>
        </div>
    );
}

export default Login