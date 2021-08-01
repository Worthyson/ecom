import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { login } from "../redux/actions/userSlice";
function Login() {
    const router = useRouter()
    const { register, handleSubmit, formState:{ errors } } = useForm();
     
      const dispatch = useDispatch();

      const onLogin = (data) => {
         const {email,password} = data
        auth.signInWithEmailAndPassword(email,password)
          .then(() => {
              router.push('/')
            dispatch(
              login({
                email: email,
                password:password
                // photoUrl: user.photoURL,
              })
            );
          })
          .catch((error) => alert(error.message));
          console.log(email,password)
      };
    return (
        <div>
          
      {login ? (
      <form onSubmit={handleSubmit(onLogin)}>
      <input {...register("email")}
      type='email'
      placeholder='email'
      />
      <p>{errors.email?.message}</p>
      
      <input {...register("password")} 
      type='password'
      placeholder='password'
      />
      <p>{errors.password?.message}</p>
      <button type="submit" className='px-2'>Submit</button>
      {/* <button onClick={()=>router.push('/register')} className='cursor-pointer underline'>not Register?</button> */}
    </form>
   ):("")}
              
      
      
  
        </div>
    )
}

export default Login
