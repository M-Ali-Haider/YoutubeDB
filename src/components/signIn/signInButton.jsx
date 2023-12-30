import '../../assets/styles/signin.css'
import signinbtn from '../../assets/images/signinbtn.svg'
const SignInButton =()=>{
    return(
        <>
        <div className="sign-in-button-helper">
            <div className="signinButton">
                <img src={signinbtn} alt="" />
                <span>Sign in</span>
            </div>
        </div>
        </>
    )
}
export default SignInButton