import '../../assets/styles/signin.css'
import signinbtn from '../../assets/images/signinbtn.svg'
import { Link } from 'react-router-dom'
const SignInButton =()=>{
    return(
        <>
        <Link to="/signup">
            <div className="sign-in-button-helper">
                <div className="signinButton">
                    <img src={signinbtn} alt="" />
                    <span>Sign in</span>
                </div>
            </div>
        </Link>
        </>
    )
}
export default SignInButton