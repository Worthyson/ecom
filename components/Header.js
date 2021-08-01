import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchBar from './SearchBar';
import Data from '../public/data.json'
function Header() {

    return (
        <div className="flex items-center shadow-md  ">
            {/* left */}
            <div className="flex-1 mx-auto pl-2">
            <img src="" alt="Logo" />
            </div>
             {/* medium */}
             <div className="flex-1 flex p-2 my-2 md:bg-white rounded ">
                <SearchBar placeholder="Search Here"
                data={Data}
                />
             </div>
              {/* right */}
            <div className="flex-1 grid grid-flow-col gap-2">
                <button>SignIn</button>
                <div className="">
                 <p className='absolute top-0 mx-6 md:mx-4 my-1  z-10'>0</p>
                <ShoppingCartIcon className='relative left-1 right-2 md:left-0 md:right-0'/>
                </div>
            </div>
        </div>
    )
}

export default Header
