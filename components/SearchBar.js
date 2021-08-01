import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import Content from './Content';
import SearchResult from './SearchResult';

function SearchBar({placeholder,data}) {
    const [filterData,setFilterData] = useState ([])

    const handleFilter =(e) =>{
        e.preventDefault()
        const searchWord = e.target.value
        const newFilter = data.filter((value)=>(
            value.title.toLowerCase().includes(searchWord.toLowerCase( ))
        ))
        if(searchWord === ""){
            setFilterData([])
        }else{

            setFilterData(newFilter)
        }
    }

    return (
        <>
             <SearchIcon />
                <input onChange={handleFilter} className='rounded-md focus:outline-none border-0 hidden bg-transparent  md:flex flex-grow ' type="text" placeholder={placeholder}/>
                {filterData.slice(0,10).length!=0 && (
                <div className="relative">
                <div className=" absolute top-8 right-4 z-10  w-[400px] h-32 ml-10 bg-yellow-200 shadow-md overflow-hidden overflow-y-auto ">
                    {filterData.map((value, key)=>(
                       
                           <SearchResult
                           key={key} 
                            link={value.images.url} target="_blank"
                            title={value.title}/>
                       
                    ))}
                </div>



                </div>
                )
}
        </>
    )
}

export default SearchBar
