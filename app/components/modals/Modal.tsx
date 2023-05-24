'use client'
import {IoMdClose} from 'react-icons/io'
import {FormEvent} from 'react'


interface Props {
    isOpen?:boolean
    disabled:boolean
    title:string
    desc?:React.ReactNode,
    body:React.ReactNode
    onSubmit : (e:FormEvent<HTMLFormElement>) =>  void
    onClose : () => void
    footer : React.ReactNode
}

const Modal = ({isOpen,disabled,title,desc,body,footer,onSubmit,onClose} : Props) => {
    if(!isOpen){
        return null
    }
    return (  
        <div className="fixed inset-0 bg-neutral-800/70 flex items-center justify-center z-50" >
            <div className={`translate ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} duration-300 bg-[white] w-11/12 sm:w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12 rounded-md px-4 sm:px-8 py-4` }>
                <div className='w-6/12 flex justify-between pl-10 items-center' >
                    <IoMdClose size={24} className='cursor-pointer hover:text-rose-500' onClick={onClose} />
                    <h1>{title}</h1>
                </div>
                {desc}
                {body}
                <form onSubmit={onSubmit}>
                    <button disabled={disabled} className={`${disabled ? 'bg-white text-black border-[1px] border-[black]' : 'bg-rose-500 text-white border-none'}  h-10 w-full rounded-lg my-4 `} >{disabled ? 'Please wait...' : 'Continue'}</button>
                </form>
                    
                {footer}
            </div>

        </div>
    );
}

export default Modal;