import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"
import Product from "./Product"
import Data from '../public/data.json'
function Content() {

    const user = useAuthState(auth)
    const name = user?.displayName

    return (
        <div className=''>
          <Product data={Data}/>  
        </div>
    )
}

export default Content
