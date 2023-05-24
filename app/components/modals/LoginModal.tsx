'use client'
import {signIn} from 'next-auth/react'
import { closeLoginModal } from "@/redux/features/ModalSlice";
import Login from "./Login";
import Modal from "./Modal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState, FormEvent} from "react";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

type UserInfo = {
    email:string,
    password:string
}
const RegisterModal = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const {isLoginOpen} = useAppSelector((state)=>state.modal)
    const [isLoading,setIsLoading] = useState(false)
    const [userInfo,setUserInfo] = useState<UserInfo>({
        email:"",password:""
    })
    const desc = (
        <div className="mt-4" >
            <h1 className="font-semibold text-xl" >Welcome Back!</h1>
            <p className="opacity-70" >Log with your Account</p>
        </div>
    )
    const handleClose = () => {
        dispatch(closeLoginModal())
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        signIn("credentials",{
            ...userInfo,
            redirect:false
        }).then((callback)=>{
            console.log(callback)
            setIsLoading(false)
            if(callback?.ok){
                toast.success("Loged In!!")
                handleClose()
            }
            if(callback?.error){
                toast.error(callback.error)
            }
        })
        
    }
    const bodyContent = (
        <Login userInfo={userInfo} setUserInfo={setUserInfo} handleSubmit={handleSubmit} />
    )

    
    const footer = (
        <div className="flex flex-col gap-4" >
            <button className="border-[1px] border-black flex py-1 items-center justify-center relative rounded-lg">
                <FcGoogle size={18} className="absolute top-0 bottom-0 my-auto left-4 sm:left-10" />
                <p>Continue With Google</p>
            </button>
            <button className="border-[1px] border-black flex py-1 items-center justify-center relative rounded-lg">
                <AiFillGithub size={18} className="absolute top-0 bottom-0 my-auto left-4 sm:left-10" />
                <p>Continue With Github</p>
            </button>
            <div className="flex justify-center items-center gap-2" >
                <p>Already have Account ?</p>
                <p className="text-neutral-800 hover:underline cursor-pointer" >Login</p>
            </div>
        </div>
        
    )
   

    
    return ( 
        <Modal
            isOpen={isLoginOpen} 
            disabled={isLoading}
            title="Login"
            desc={desc}
            body={bodyContent}
            onSubmit={handleSubmit}
            footer={footer}
            onClose={handleClose}
            />
     );
}
 
export default RegisterModal;