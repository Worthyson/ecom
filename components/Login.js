import { useRouter } from "next/dist/client/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { useSelector } from "react-redux"
import { auth } from "../firebase"
import {logout} from '../redux/actions/userSlice'

function Login() {
    const router = useRouter()
    const signOut = useSelector(logout)
       
  const[user,loading] = useAuthState(auth)

  const Name=user?.displayName
    return (
        <div className='mx-[50vh]  md:relative '>
            <div className=" bg-gray-400 rounded-lg px-6 py-6 my-20  border shadow-lg justify-center  items-center absolute z-50 md:top-1 md:right-2 right-2 left-2 top-0 ">

            <div className="justify-center mx-[25%]  my-32 ">
    {/* <h1 onClick={()=>router.push('/login')} className='cursor-pointer  flex items-center  p-10  hover:font-bold text-lg'>Login</h1>
    <p className='items-center flex gap-8'>Hello {Name ? Name : <p>Guest</p>}</p> */}

    
        <h1 onClick={()=>router.push('/login')} className='text-xs hover:underline font-bold cursor-pointer hover:text-sm'>Click here to Login</h1>
            <br/>
            <h1 onClick={()=>router.push('/register')} className='text-xs hover:underline font-bold cursor-pointer'><span className='hover:font-bold hover:text-sm underline hover:capitalize'>
            not Register ? Click here</span></h1>
    </div>
    <button onClick={(signOut)=>signOut}>{user ? `${Name}`:`Guest`}</button>
                </div>
    
            
        </div>
    )
}

export default Login
