import { useRouter } from "next/dist/client/router";
import Head from "next/head"
// import { useRef } from "react";
import { useForm } from "react-hook-form";
 import { auth } from "../firebase";
// import firebase from 'firebase';
function Register() {
    const { register, formState: { errors }, handleSubmit } = useForm();
     const router = useRouter()
    const onRegister = (data) =>{
        const {Name, email,password} = data
        auth
        ?.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            router.push('/login')
          userAuth.user
            .updateProfile({
              displayName: Name,
            //   photoURL: profilePic,

            })
            
        })
        .catch((error) => alert(error));

//         firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onRegister)}>
      <input {...register("Name")} 
      placeholder='name'
      />
      <p>{errors.firstName?.message}</p>
        
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
      <button type="submit">Submit</button>
    </form>
     

        </div>
    )
}

export default Register
