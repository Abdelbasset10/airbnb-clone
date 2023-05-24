type Props = {
    label:string,
    onClick : () => void
}

const MenuItems = ({label, onClick} : Props) => {
    return ( 
        <button onClick={onClick} className="w-full px-4 py-2 text-left border-b-[1px] hover:bg-gray-100" >{label}</button>
    );
}

export default MenuItems;