import ProductItems from "./ProductItems"

function Product({data}) {
    //     let images = data.images.map((images)=>
    //     (
    //   <img key={index}
    //     src={images.url} alt="" />    
           
    //      )
    //      )
   
        
    return (

        <div className="p-2 flex">
            
            {
            data.slice(0,2).map(({category,title,description,content,price,images})=>(
             <ProductItems
             content={content}
             images={images.map((image,i)=>(
                 
                image.url
                 
             ))}
             title={title}
             category={category}
             description={description}
             price={price}
              />
            )
            )
           }
      
       
                  

        </div>
        
    )
}

export default Product
