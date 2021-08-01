function SearchResult({title,link}) {
    return (
        <div className='p-2 w-[200px] mx-auto'>
            <p className='cursor-pointer hover:bg-green-300' onClick={link}>{title}</p>
        </div>
    )
}

export default SearchResult
