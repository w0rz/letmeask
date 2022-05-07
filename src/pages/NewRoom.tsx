import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { PageAuth } from '../styles/PageAuth';
import { DefaultButton } from '../components/Buttons';
import { Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';


export function NewRoom() {
// const { user } = useAuth();
  return (
    <PageAuth>
      <aside>
        <img
          src={illustrationImg}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt='Letmeask' />
          <h2>Crie uma nova sala.</h2>
          <form>
            <input type='text' placeholder='Nome da sala' />
            <DefaultButton type='submit'>Criar sala</DefaultButton>
          </form>
          <p>
              Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
                     </p>
        </div>
      </main>
    </PageAuth>
  );
}
