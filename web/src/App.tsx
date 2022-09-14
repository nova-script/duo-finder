// Icons
import { MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css';


// Images
import logoSVG from '../assets/logo.svg';


interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return( 
    <button>
      {props.title}
    </button>
  )
}


function App() {
  return(
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoSVG} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>Duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a className='relative rounded-lg overflow-hidden'>
          <img src="../assets/game1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gamebox-gradient absolute bottom-0 left-0'>
            <strong className='font-black text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>    

        <a className='relative rounded-lg overflow-hidden'>
          <img src="../assets/game2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gamebox-gradient absolute bottom-0 left-0'>
            <strong className='font-black text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden'>
          <img src="../assets/game3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gamebox-gradient absolute bottom-0 left-0'>
            <strong className='font-black text-white block'>Counter-Strike</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden'>
          <img src="../assets/game4.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gamebox-gradient absolute bottom-0 left-0'>
            <strong className='font-black text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden'>
          <img src="../assets/game5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gamebox-gradient absolute bottom-0 left-0'>
            <strong className='font-black text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden'>
          <img src="../assets/game6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gamebox-gradient absolute bottom-0 left-0'>
            <strong className='font-black text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'> 4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2634] px-8 py-6 rounded-lg flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>
              Não encontrou seu duo?
            </strong>
            <span className='block text-zinc-400'>
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/> Publicar Anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
