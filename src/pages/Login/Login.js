import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title/Title'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';

const Login = () => {

    const navigate = useNavigate()

    const vaParaHome = () => {
        navigate('./home')
    }

    return (
        <div className='container'>
            <Title title='Login' />
            <Input label='Usuário' type='text' />
            <Input label='Senha' type='password'/>
            <Button nome='Entrar' redirecionar={vaParaHome}  />
            <Link href='https://www.youtube.com/'/>
        </div>
    );
}

export default Login