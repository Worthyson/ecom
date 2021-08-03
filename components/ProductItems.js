function ProductItems({category,title,description,content,price,images}) {


    return (
        <div className='h-60 w-60 shadow border-2 text-xs mx-2 rounded'>
            <div className="grid grid-flow-col">
                {images.map(({public_id,url},index)=>(
            <img key={index}
            id={public_id} 
            src={url} alt="" />
                ))}

            <p className=''>{description}</p>
            </div>
        </div>
    )
}

export default ProductItems
