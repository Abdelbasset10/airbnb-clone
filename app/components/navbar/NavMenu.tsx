'use client';
import {AiOutlineMenu} from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Avatar from '../Avatar';
import { useState , useCallback } from 'react';
import MenuItems from './MenuItems';
import { openLoginModal, openRegisterModal } from '@/redux/features/ModalSlice';

const NavMenu = () => {
    const dispatch = useAppDispatch()
    const [isOpen,setIsOpen] = useState(false)

    const openMenu = useCallback(()=>{
        setIsOpen((prev)=>!prev)
    },[])
    return ( 
        <div className="flex items-center md:gap-4 relative" >
            <p className='hidden md:block font-semibold' >Airbnb your Home</p>
            <div className="flex items-center gap-2 border-[1px] rounded-lg p-[1px] cursor-pointer " onClick={openMenu} >
                <AiOutlineMenu />
                <Avatar />
            </div>
            {isOpen && (
                <div className='absolute top-10 flex flex-col  w-full bg-[white] shadow-sm border-[1px]' >
                    <MenuItems label="Login" onClick={()=>{dispatch(openLoginModal())}} />
                    <MenuItems label="SignUp" onClick={()=>{dispatch(openRegisterModal())}} />
                </div>
            )}
            
        </div>
    );
}

export default NavMenu;