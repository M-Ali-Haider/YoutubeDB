import '../../assets/styles/signin.css'
import signinbtn from '../../assets/images/signinbtn.svg'
import { Link } from 'react-router-dom'
const SignInButton =()=>{
    return(
        <>
        
            <div className="sign-in-button-helper">
            <Link to="/signup">
                <div className="signinButton">
                    <img src={signinbtn} alt="" />
                    <span>Sign in</span>
                </div>
            </Link>
            </div>
        
        </>
    )
}
export default SignInButton