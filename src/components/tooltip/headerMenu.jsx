import '../../assets/styles/tooltip.css'
import switchaccount from "../../assets/images/switchaccount.svg"
import signout from "../../assets/images/signout.svg"
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/userSlice'
import pfp from "../../assets/images/pfp.webp"
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'


const HeaderMenu = ({currentUser,closeHM})=>{

    const navigate=useNavigate();

    const imgSrc = currentUser.img || pfp;
    const dispatch = useDispatch();
    const signOut = ()=>{
        dispatch(logout())
        navigate('/')
    }


    const headerMenuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (headerMenuRef.current && !headerMenuRef.current.contains(event.target)) {
            closeHM();
        }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [headerMenuRef, closeHM]);

    return(
        <>

        <div className="headerMenu" ref={headerMenuRef}>

            {/* Logged In User Details */}
            <div className="headerMenu-div headerMenu-div-top">
                <div className="headerMenu-pfp">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="headerMenu-user">
                    <div className="headerMenu-username">{currentUser.name}</div>
                    <div className="headerMenu-email">{currentUser.email}</div>
                    <div className="headerMenu-viewChannel">View your channel</div>
                </div>
            </div>

            <div className="headerMenu-div">

                {/* Switch Account */}
                <div className="headerMenu-div-unit">
                    <div className="headerMenu-div-unit-img">
                        <img src={switchaccount} alt="" />
                    </div>
                    <div className="headerMenu-div-unit-desc">Switch Account</div>
                </div>

                {/* Sign Out */}
                <div className="headerMenu-div-unit" onClick={signOut}>
                    <div className="headerMenu-div-unit-img">
                        <img src={signout} alt="" />
                    </div>
                    <div className="headerMenu-div-unit-desc">Sign out</div>
                </div>
            </div>



        </div>
        </>
    )
}
export default HeaderMenu