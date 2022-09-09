import React from 'react';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { PageAuth } from '../styles/PageAuth';
import { DefaultButton } from '../components/Buttons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function Home() {
  const navigate = useNavigate();
const {user, signInWithGoogle} = useAuth()

async function handleCreateRoom() {
  if (!user){
    await signInWithGoogle()
  }
  navigate('/rooms/new');
  
}
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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt='Logo do Google' />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input type='text' placeholder='Digite o código da sala' />
            <DefaultButton type='submit'>Entrar na sala</DefaultButton>
          </form>
        </div>
      </main>
    </PageAuth>
  );
}
