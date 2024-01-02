import '../assets/styles/subout.css'
import SignInButton from './signIn/signInButton'
import sub from '../assets/images/subopen.svg'
const Subout=()=>{
    return(
        <>
            <div className="channel-page channel-page-logged-out">
                    <img className='cplo-img' src={sub} alt="" />
                    <h1>Don’t miss new videos</h1>
                    <p>Sign in to see updates from your favorite YouTube channels</p>
                    <SignInButton />
            </div>
        </>
    )
}
export default Subout