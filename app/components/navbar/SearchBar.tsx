import {BiSearch} from 'react-icons/bi'

const SearchBar = () => {
    return ( 
        <div className="flex items-center py-2 rounded-lg border-[1px] lg:gap-8" >
            <div className='px-4 cursor-pointer'>
                <p>Anywhere</p>
            </div>
            <div className='hidden sm:block px-4 border-x-[1px] cursor-pointer'>
                <p>AnyWeek</p>
            </div>
            <div className='flex items-center px-4 gap-2 cursor-pointer'>
                <p className='hidden sm:block'>Add Guest</p>
                <div className='p-2 rounded-full bg-rose-500 text-[white]' >
                    <BiSearch size={18} />
                </div>
            </div>
            
        </div>
    );
}

export default SearchBar;