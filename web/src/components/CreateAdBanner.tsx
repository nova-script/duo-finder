// Icons
import { MagnifyingGlassPlus } from 'phosphor-react';

// Radix
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner(){
    return (
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

         <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/> Publicar Anúncio
        </Dialog.Trigger>
        </div>
    </div>
)}