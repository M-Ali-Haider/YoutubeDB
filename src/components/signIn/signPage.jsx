import { useState } from 'react'
import '../../assets/styles/signin.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginFailure, loginSuccess,loginStart } from '../../redux/userSlice'
import { auth,provider} from '../../firebase'
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const SignPage=()=>{

    const navigate = useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch = useDispatch()

    const handleLogin = async (e)=>{
        e.preventDefault();
        dispatch(loginStart())
        try {
            const res = await axios.post("api/auth/signin/",{name,password})
            dispatch(loginSuccess(res.data))
            navigate('/')
        } catch (err) {
            dispatch(loginFailure())
        }
    }
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
          const res = await axios.post("api/auth/signup/", { name, email, password });
          console.log(res.data)
          dispatch(loginSuccess(res.data));
          navigate('/');
        } catch (err) {
          dispatch(loginFailure());
        }
    };

    const signInWithGoogle= async ()=>{
        dispatch(loginStart())
        signInWithPopup(auth,provider)
            .then((result)=>{
                axios.post("api/auth/google",{
                    name:result.user.displayName,
                    email:result.user.email,
                    img:result.user.photoURL,
                }).then((res)=>{
                    dispatch(loginSuccess(res.data))
                })
                navigate('/')
            })
            .catch(err=>{
                dispatch(loginFailure())
            })
    }
    return(
        <>
        <div className="signuppage">
            <div className="sign-in-container">
                <h2>Sign In</h2>
                <input placeholder='Username' type="text" onChange={e=>setName(e.target.value)} />
                <input placeholder='Password' type="password" onChange={e=>setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Sign in</button>
            </div>
            <div className="sign-in-container">
                <h2>Sign Up</h2>
                <input placeholder='Username' type="text" onChange={e=>setName(e.target.value)}/>
                <input placeholder='Email' type="text" onChange={e=>setEmail(e.target.value)}/>
                <input placeholder='Password' type="password" onChange={e=>setPassword(e.target.value)}/>
                <button onClick={handleSignUp}>Sign up</button>
                <button onClick={signInWithGoogle}>Signin with Google</button>
            </div>
        </div>
        </>
    )
}
export default SignPage