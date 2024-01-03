import '../assets/styles/header.css'
import search from '../assets/images/search.svg'
import { Link, useNavigate } from 'react-router-dom';
import SignInButton from './signIn/signInButton';
import { useSelector } from 'react-redux';
import pfp from "../assets/images/pfp.webp"
import { useState } from 'react';
import HeaderMenu from './tooltip/headerMenu';
import Upload from './upload';
import logo from '../assets/images/logo.svg'
import bm from '../assets/images/bm.svg'
import mic from '../assets/images/mic.svg'
import searcher from '../assets/images/searcher.svg'


function Header({isInputFocused,handleInputFocus,handleInputBlur,handleSidebar}){
    const navigate = useNavigate()
    const {currentUser} = useSelector(state=>state.user)
    const [isHMOpen,setHMStatus]=useState(false);
    const [isUploadOpen,setUploadStatus]=useState(false);
    const imgSrc = currentUser && currentUser.img ? currentUser.img : pfp;
    const handleHM=()=>{
        setHMStatus(!isHMOpen)
    }
    const closeHM=()=>{
        setHMStatus(false);
    }
    const openUpload=()=>{
        setUploadStatus(true)
    }
    const closeUpload=()=>{
        setUploadStatus(false)
    }
    
    const handleSearch = () => {
        if (searchText.trim() !== "") {
          navigate(`/search?q=${searchText}`);
        }
      };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      };

    const [searchText,setSearchText]=useState("");


    return(
        <>
        <header>
            <div className="header-helper">
                <div className="header-first">
                    <div 
                        className="c-icon hi"
                        id='bm'
                        onClick={handleSidebar}
                    >
                        <img src={bm} alt="" />
                    </div>
                    <Link to="/">
                        <div className='logo'>
                            <img src={logo} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="header-second">
                    <div className="yt-searchbar">
                        <div className={`yt-input-div ${isInputFocused ? 'input-focused' : ''} `}>
                            <input className={`yt-input ${isInputFocused ? 'input-padded' : ''}`} 
                                type="search" 
                                placeholder='Search'
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                onChange={e=>setSearchText(e.target.value)}
                                onKeyDown={handleKeyDown} 
                            />
                            <img className={`search-abs ${isInputFocused ? '' : 'display-none'}`} src={searcher} alt="" />
                        </div>

                        {/* Search */}
                        <button className={`search`} onClick={handleSearch}>
                            <img src={search} alt="" />
                        </button>

                    </div>
                    <div className="c-icon  mic">
                        <img src={mic} alt="" />
                    </div>
                </div>
                <div className="header-third">
                    {currentUser?(
                        <>
                        <div id='h-download' className="c-icon hi" onClick={openUpload}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M17 18v1H6v-1ZM6.49 9l.71.71 3.8-3.8V16h1V5.91l3.8 3.81.71-.72-5-5Z"></path></svg>
                        </div>
                        <div id='h-noti' className="c-icon hi"><svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg></div>
                        <div className='c-icon mobile-search'><img src={search} alt="" /></div>
                        <div id='pfp' className="c-pfp" >
                            <img src={imgSrc} alt="" onClick={handleHM}/>
                            {isHMOpen?(<HeaderMenu currentUser={currentUser} closeHM={closeHM}/>):(<></>)}
                        </div>
                        </>
                        
                    ):(
                        <SignInButton />
                    )}
                    
                </div>
            </div>
            {isUploadOpen?<Upload closeUpload={closeUpload}/>:null}
        </header>
        </>
    )
}
export default Header;