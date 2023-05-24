'use client'
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { User } from "@prisma/client";


interface Props {
    currentUser?: User | null
}
const Navbar = ({currentUser} : Props) => {
    console.log(currentUser)
    return ( 
        <nav className="flex items-center justify-between w-full border-b[1px] bg-[white] p-4 z-10 shadow-sm" >
            <div className="hidden sm:block" >
                <Link href={'/'}>
                    <Image src="/images/logo.png" alt="logo" width={100} height={100} />
                </Link>
            </div>
            <SearchBar />
            <NavMenu />
        </nav>
    );
}

export default Navbar;