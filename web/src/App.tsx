// React
import { useEffect, useState } from 'react';

// Radix
import * as Dialog from '@radix-ui/react-dialog';

// Styles
import './styles/main.css';

// Images
import logoSVG from '../assets/logo.svg';

// Components
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { Input } from './components/Form/Input';

// Icons
import { GameController } from 'phosphor-react';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return(
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoSVG} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>Duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              ads={game._count.ads}/>
          )
        })}

        
      </div>

      <Dialog.Root>
        <CreateAdBanner/>
        
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60  inset-0 fixed'/>
          <Dialog.DialogContent
          className='fixed bg-[#2A2634] py-8 px-10
          text-white top-1/2 left-1/2 -translate-x-1/2
          -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
            <Dialog.DialogTitle className='text-3xl font-black'>
              Publique um anúncio</Dialog.DialogTitle>
              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='game' className='font-semibold'>Qual o game?</label>
                  <Input id='game' type="text" placeholder='Selecione o game que deseja jogar'/>
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='name'>Seu nickname</label>
                  <Input id='name' type="text" placeholder='Como te chamam dentro do game?'/>
                </div>

                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                    <Input id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO'/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='discord'>Qual seu discord?</label>
                    <Input id='discord' type="text" placeholder='Usuario#0000'/>
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='weekDays'>Quando costuma jogar?</label>
                    
                    <div className='grid grid-cols-4 gap-2'>
                      <button
                        title="Domingo"
                        className='w-8 h-8 rounded bg-zinc-900'>
                        D
                      </button>
                      <button
                        title="Segunda"
                        className='w-8 h-8 rounded bg-zinc-900'>
                        S
                      </button>
                      <button
                        title="Terça"
                        className='w-8 h-8 rounded bg-zinc-900'>
                        T
                      </button>
                      <button
                        title="Quarta"
                        className='w-8 h-8 rounded bg-zinc-900'>
                          Q
                      </button>
                      <button
                        title="Quinta"
                        className='w-8 h-8 rounded bg-zinc-900'>
                          Q
                      </button>
                      <button
                        title="Sexta"
                        className='w-8 h-8 rounded bg-zinc-900'>
                          S
                      </button>
                      <button
                        title="Sábado"
                        className='w-8 h-8 rounded bg-zinc-900'>
                          S
                      </button>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor='hourStart'>Qual horário  do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input id='hourStart' type="time" placeholder='De'/>
                      <Input id='hourEnd' type="time" placeholder='De'/>
                    </div>
                  </div>
                </div>

                <div className='mt-2 flex gap-2 text-sm'>
                  <Input type='checkbox'/>
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close className='bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold'>
                    Cancelar
                  </Dialog.Close>
                  <button
                   className='bg-violet-500 px-5 h-12 rounded-md
                   font-semibold flex items-center gap-3 hover:bg-violet-600'
                  type="submit">
                    <GameController size={24}/>
                    Encontrar duo
                  </button>
                </footer>
              </form>
          </Dialog.DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
