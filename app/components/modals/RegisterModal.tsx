'use client'
import { closeRegisterModal } from "@/redux/features/ModalSlice";
import Register from "../Register";
import Modal from "./Modal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState, FormEvent} from "react";
import axios from "axios";
import { toast } from "react-toastify";

type UserInfo = {
    email:string,
    name:string,
    password:string
}
const RegisterModal = () => {
    const dispatch = useAppDispatch()
    const {isRegisterOpen} = useAppSelector((state)=>state.modal)
    const [isLoading,setIsLoading] = useState(false)
    const [userInfo,setUserInfo] = useState<UserInfo>({
        email:"",name:"",password:""
    })
    const desc = (
        <div className="mt-4" >
            <h1 className="font-semibold text-xl" >Welcome to Airbnb</h1>
            <p className="opacity-70" >Create Account</p>
        </div>
    )
    const handleClose = () => {
        dispatch(closeRegisterModal())
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        axios.post("/api/register",userInfo).then(()=>{
            toast.success("created !!",{position:'top-center'})
            handleClose()
        })
        .catch((err)=>{
            toast.error(err.message,{position:'top-center'})
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    const bodyContent = (
        <Register userInfo={userInfo} setUserInfo={setUserInfo} handleSubmit={handleSubmit} />
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
            isOpen={isRegisterOpen} 
            disabled={isLoading}
            title="Register"
            desc={desc}
            body={bodyContent}
            onSubmit={handleSubmit}
            footer={footer}
            onClose={handleClose}
            />
     );
}
 
export default RegisterModal;