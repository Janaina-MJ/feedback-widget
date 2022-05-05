import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react';

export function CloseButton() {
    return (
        <Popover.Button className='absolute top-5 right-5 text-zinc-400 hover:text-zinc-100' title='Close feedback form'>
            <X className='w-4 h-4' weight='bold'/>
        </Popover.Button>
    );
}