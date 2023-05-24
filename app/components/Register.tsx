'use client'

import { ChangeEvent,FormEvent} from "react";

type UserInfo = {
    email:string,
    name:string,
    password:string
}
interface Props {
    setUserInfo: Dispatch<SetStateAction<UserInfo>>
    userInfo:UserInfo,
    handleSubmit :(e : FormEvent<HTMLFormElement>) =>  void
    
}

const Register = ({userInfo,setUserInfo,handleSubmit} : Props) => {
    

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setUserInfo({...userInfo,[e.target.name] :e.target.value})
    }
    return (  
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder="Email"
                name="email"
                value={userInfo.email}
                className="h-10 w-full border-[2px] outline-none p-2 rounded-md"
                onChange={handleChange}
                />
            <input 
                type="text"
                placeholder="Name"
                name="name"
                value={userInfo.name}
                className="h-10 w-full border-[2px] outline-none p-2 rounded-md"
                onChange={handleChange} />
            <input 
                type="text"
                placeholder="Password"
                name="password"
                value={userInfo.password}
                className="h-10 w-full border-[2px] outline-none p-2 rounded-md"
                onChange={handleChange} />
        </form>
    );
}

export default Register;